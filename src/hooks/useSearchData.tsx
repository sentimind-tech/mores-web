"use client";

import { useEffect, useState, useCallback } from "react";
import { getInsightList } from "@/services/insight";
import { getServiceListPagination } from "@/services/service";
import { getVacancyListPagination } from "@/services/vacancy";
import {
  DROPDOWN_FILTER_SEARCH_ALL,
  DROPDOWN_FILTER_SEARCH_INSIGHT,
  DROPDOWN_FILTER_SEARCH_SERVICE,
  DROPDOWN_FILTER_SEARCH_CAREER,
} from "@/store/constants";
import { TInsight } from "@/types/insight";
import { TService } from "@/types/service";
import { TVacancy } from "@/types/vacancy";
import { imagePath } from "@/module/helper";
import { useLocale } from "next-intl";
import { Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/routing";

const ITEMS_PER_PAGE = 10;

type FilterResult = {
  items: TransformedDataSearch[];
  total: number;
};

type TransformedDataSearch = {
  image: string | null;
  title: string;
  category?: string;
  desc: string | null;
  link: string;
};

const transformInsights = (
  insights: TInsight[],
  locale: Locale
): TransformedDataSearch[] => {
  const data = insights.map(
    (insight) =>
      ({
        image: imagePath(insight.id, insight.cover_image, "insights"),
        title: insight.title,
        category:
          insight.expand?.service_tags?.[0].name ||
          insight.expand?.industry_tags?.[0].name,
        desc: insight.description,
        link: `/${locale}/insights/${insight.id}`,
      } as TransformedDataSearch)
  );

  return data;
};
const transformServices = (
  services: TService[],
  locale: Locale
): TransformedDataSearch[] => {
  return services.map(
    (service) =>
      ({
        image: imagePath(service.id, service.cover_image, "services"),
        title: service.name,
        category: "services",
        desc: service.description,
        link: `/${locale}/services/${service.id}${
          service.parent_service_id && `/${service.parent_service_id}`
        }`,
      } as TransformedDataSearch)
  );
};

const transformCareers = (
  careers: TVacancy[],
  locale: Locale
): TransformedDataSearch[] => {
  return careers.map(
    (career) =>
      ({
        image: null,
        title: career.position_name,
        category: career.division,
        desc: null,
        link: career.application_url,
      } as TransformedDataSearch)
  );
};

const useSearchData = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [defaultValueInput, setDefaultValueInput] = useState<string>("");
  const [dataItems, setDataItems] = useState<any[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    DROPDOWN_FILTER_SEARCH_ALL
  );
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const localActive = useLocale() as Locale;
  const [initialLoadPage, setInitialLoadPage] = useState(true);
  const [search, setSearch] = useState<string | null>(null);

  const handleEnterSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = (event.target as HTMLInputElement).value;

      resetSearch(inputValue, selectedFilter);
    }
  };

  const handleDropdownChange = (value: string) => {
    setSelectedFilter(value);
  };

  const fetchData = useCallback(
    async (keyword: string, filter: string, page: number) => {
      setLoading(true);
      try {
        let result: FilterResult = { items: [], total: 0 };
        let transformedInsights: TransformedDataSearch[] = [];
        let transformedServices: TransformedDataSearch[] = [];
        let transformedCareers: TransformedDataSearch[] = [];
        const offset = (page - 1) * ITEMS_PER_PAGE;
        const query: { keyword?: string } = { keyword: keyword };
        const itemPerPageAll = ITEMS_PER_PAGE / 3;

        if (keyword) {
          query.keyword = keyword;
        }

        switch (filter) {
          case DROPDOWN_FILTER_SEARCH_INSIGHT:
            const insightResponse = await getInsightList(
              { keyword: keyword },
              offset,
              ITEMS_PER_PAGE
            );

            if (insightResponse) {
              transformedInsights = transformInsights(
                insightResponse?.items,
                localActive
              );
            }

            result.items = transformedInsights;
            result.total = insightResponse?.totalItems ?? 0;
            break;
          case DROPDOWN_FILTER_SEARCH_SERVICE:
            const serviceResponse = await getServiceListPagination(
              { keyword: keyword },
              offset,
              ITEMS_PER_PAGE
            );

            if (serviceResponse) {
              transformedServices = transformServices(
                serviceResponse?.items,
                localActive
              );
            }

            result.items = transformedServices;
            result.total = serviceResponse?.totalItems ?? 0;
            break;
          case DROPDOWN_FILTER_SEARCH_CAREER:
            const careerResponse = await getVacancyListPagination(
              { keyword: keyword },
              offset,
              ITEMS_PER_PAGE
            );

            if (careerResponse) {
              transformedCareers = transformCareers(
                careerResponse?.items,
                localActive
              );
            }

            result.items = transformedCareers;
            result.total = careerResponse?.totalItems ?? 0;
            break;
          default:
            // Fetch all data
            const [insight, services, careers] = await Promise.all([
              getInsightList({ keyword: keyword }, page, ITEMS_PER_PAGE),
              getServiceListPagination(
                { keyword: keyword },
                page,
                ITEMS_PER_PAGE
              ),
              getVacancyListPagination(
                { keyword: keyword },
                page,
                ITEMS_PER_PAGE
              ),
            ]);

            if (insight) {
              transformedInsights = transformInsights(
                insight?.items,
                localActive
              );
            }

            if (services) {
              transformedServices = transformServices(
                services?.items,
                localActive
              );
            }

            if (careers) {
              transformedCareers = transformCareers(
                careers?.items,
                localActive
              );
            }

            result.items = [
              ...transformedInsights,
              ...transformedServices,
              ...transformedCareers,
            ];

            result.total =
              (insight?.totalItems ?? 0) +
              (services?.totalItems ?? 0) +
              (careers?.totalItems ?? 0);

            if (insight && services && careers) setInitialLoadPage(false);
        }

        setDataItems((prevData) => [...prevData, ...result.items]);
        setTotalResults(result.total);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [localActive]
  );

  const resetSearch = useCallback(
    (keyword: string, filter: string) => {
      setCurrentPage(1);
      setDataItems([]);
      fetchData(keyword, filter, 1);
    },
    [fetchData]
  );

  const handleLoadMore = (e: any) => {
    e.preventDefault();

    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchData(defaultValueInput, selectedFilter, nextPage);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resultParam = urlParams.get("result");
    setSearch(resultParam);
  }, [pathname, router]);

  useEffect(() => {
    if (search) {
      setDefaultValueInput(search);
      resetSearch(search, selectedFilter);
    }
  }, [search, resetSearch]);

  useEffect(() => {
    const inputElement = document.getElementById(
      "input-search"
    ) as HTMLInputElement | null;
    let keyword = "";

    if (inputElement && inputElement.value == "") {
      keyword = "";
    }
    if (inputElement && inputElement.value !== "") {
      keyword = inputElement.value;
    }

    resetSearch(keyword, selectedFilter);
  }, [selectedFilter, resetSearch]);

  return {
    defaultValueInput,
    setDefaultValueInput,
    handleEnterSearch,
    handleDropdownChange,
    initialLoadPage,
    loading,
    dataItems,
    totalResults,
    handleLoadMore,
    resetSearch,
    selectedFilter,
  };
};

export default useSearchData;
