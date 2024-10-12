"use client";

import { useEffect, useState } from "react";
import { HeadingText, BodyText } from "../Text";
import CardSearchItem from "../Cards/CardSearchItem";
import { Select } from "@/components/Select";
import { Option } from "@/components/Option";
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
import { ButtonPrimary } from "../Button";
import { SkeletonSearchResult } from "../Skeleton";
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
          insight.expand?.service_tags.name ||
          insight.expand?.industry_tags.name,
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

const SearchContent = () => {
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

  const resetSearch = (keyword: string, filter: string) => {
    setCurrentPage(1);
    setDataItems([]);
    fetchData(keyword, filter, 1);
  };

  const fetchData = async (keyword: string, filter: string, page: number) => {
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
            transformedCareers = transformCareers(careers?.items, localActive);
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
  };

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
  }, [search, selectedFilter]);

  return (
    <section className="py-32 md:py-[5rem] px-16" id="search-container">
      <div className="w-full max-w-[1045px] mx-auto">
        <HeadingText className="upoercase text-black text-32 md:text-[3rem] leading-[2.7rem] md:leading-[3.75rem]">
          SEARCH RESULT
        </HeadingText>
        <div className="mt-20 md:mt-[2.5rem] lg:mt-[5rem]">
          <div className="flex items-center justify-between gap-[42px] mb-[46px]">
            <div className="w-2/3">
              <div className="flex border-b-[1.5px] py-6 border-gray-silver">
                <div className="shrink-0">
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <path
                      d="M26.2812 23.4062L19.2533 16.6195C20.3859 15.1168 20.9951 13.3057 20.9933 11.4472C20.9933 6.58274 16.8942 2.625 11.856 2.625C6.81783 2.625 2.71875 6.58274 2.71875 11.4472C2.71875 16.3116 6.81783 20.2694 11.856 20.2694C13.7809 20.2712 15.6567 19.6829 17.2131 18.5894L24.2422 25.375L26.2812 23.4062ZM11.856 17.483C10.6194 17.4832 9.4106 17.1292 8.38238 16.466C7.35416 15.8027 6.55274 14.86 6.07947 13.7569C5.6062 12.6539 5.48234 11.4401 5.72356 10.2691C5.96478 9.09813 6.56023 8.0225 7.43462 7.17826C8.30901 6.33402 9.42306 5.75909 10.6359 5.5262C11.8487 5.2933 13.1058 5.41288 14.2482 5.86983C15.3907 6.32678 16.3671 7.10057 17.054 8.09333C17.741 9.0861 18.1076 10.2533 18.1074 11.4472C18.1055 13.0474 17.4462 14.5816 16.2743 15.7131C15.1023 16.8446 13.5134 17.4812 11.856 17.483Z"
                      fill="#00A2B6"
                    />
                  </svg>
                </div>
                <div className="flex-1 px-20">
                  <input
                    id="input-search"
                    type="text"
                    className="w-full outline-0 border-0 font-graphik text-18 leading-[1.25rem] capitalize"
                    placeholder="Search"
                    defaultValue={defaultValueInput}
                    onKeyDown={handleEnterSearch}
                  />
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <Select onChange={(e) => handleDropdownChange(e.target.value)}>
                <Option value={DROPDOWN_FILTER_SEARCH_ALL}>All Result</Option>
                <Option value={DROPDOWN_FILTER_SEARCH_INSIGHT}>Insight</Option>
                <Option value={DROPDOWN_FILTER_SEARCH_SERVICE}>Services</Option>
                <Option value={DROPDOWN_FILTER_SEARCH_CAREER}>Careers</Option>
              </Select>
            </div>
          </div>

          {initialLoadPage ? (
            <SkeletonSearchResult />
          ) : (
            <>
              {loading ? (
                <SkeletonSearchResult />
              ) : (
                <>
                  {dataItems.length > 0 ? (
                    <>
                      {!loading && (
                        <BodyText className="font-inter font-semibold text-18 md:text-24 leading-[1.5rem] md:leading-[2rem] text-black">
                          Showing {dataItems.length} of {totalResults} results
                        </BodyText>
                      )}

                      <div className="mt-6 md:mt-[1.375rem]">
                        {dataItems.map((item, index) => (
                          <div
                            className="block border-b border-gray-cloud last:border-b-[0]"
                            key={index}
                          >
                            <CardSearchItem {...item} />
                          </div>
                        ))}
                      </div>

                      {loading ? (
                        <div className="flex items-center justify-center h-[200px]">
                          <div className="w-[48px] h-[48px]">
                            <img
                              src="/icon/ico-loading.svg"
                              alt=""
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          {dataItems.length < totalResults && (
                            <div className="flex justify-center items-center mt-[44px]">
                              <ButtonPrimary
                                className="uppercase"
                                onClick={handleLoadMore}
                              >
                                More
                              </ButtonPrimary>
                            </div>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[300px]">
                      <div className="w-[160px]">
                        <img
                          src="/icon/ico-empty-data.svg"
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <span className="block mt-24">Data Not Found</span>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchContent;
