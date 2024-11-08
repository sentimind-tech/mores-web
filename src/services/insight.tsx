import { pb } from "@/lib/pocketbase";
import { TInsight } from "@/types/insight";
import { RecordFullListOptions } from "pocketbase";

export type TInsightParams = {
  industryId?: string;
  serviceId?: string;
  insightId?: string;
  isFeatured?: boolean;
  sortBy?: string;
  keyword?: string;
  isFeaturedHome?: boolean;
  hasIndustry?: boolean;
  hasService?: boolean;
};

type TQueryParams = {
  sort: string;
  filter?: string;
  expand?: string;
  isFeatured?: string;
  requestKey: null;
};

async function getInsightList(
  params: TInsightParams = {},
  page: number = 1,
  perPage: number = 10
) {
  try {
    let queryParams: TQueryParams = {
      sort: "-created",
      requestKey: null,
    };
    if (params.sortBy && params.sortBy == "oldest") {
      queryParams.sort = "created";
    }

    let filters: string[] = [];
    if (params.industryId) {
      filters.push(`industry_tags ~ "${params.industryId}"`);
    }
    if (params.serviceId) {
      filters.push(`service_tags ~ "${params.serviceId}"`);
    }

    // Check if there are any industry tags
    if (params.hasIndustry) {
      filters.push(`industry_tags:length > 0`);
    }

    // Check if there are any service tags
    if (params.hasService) {
      filters.push(`service_tags:length > 0`);
    }

    if (params.insightId) {
      filters.push(`id != "${params.insightId}"`);
    }

    if (params.isFeatured === true) {
      filters.push("is_featured = true");
    } else if (params.isFeatured === false) {
      filters.push("is_featured = false");
    }

    if (params.keyword) {
      filters.push(`title ~ "${params.keyword}"`);
    }

    if (params.isFeaturedHome === true) {
      filters.push("is_featured_main_page = true");
    } else if (params.isFeaturedHome === false) {
      filters.push("is_featured_main_page = false");
    }

    // Combine all filters into a single string using AND logic
    if (filters.length > 0) {
      queryParams.filter = filters.join(" && ");
    }
    queryParams.expand = "industry_tags,service_tags";

    queryParams.requestKey = null;

    let response = await pb
      .collection("insights")
      .getList<TInsight>(page, perPage, queryParams);
    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

async function getInsightDetail(id: string) {
  try {
    let response = await pb.collection("insights").getOne<TInsight>(id, {
      expand: "industry_tags,service_tags,authors",
    });
    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

async function getInsightForHome(page: number = 1, perPage: number = 3) {
  try {
    let response = await pb
      .collection("insights")
      .getList<TInsight>(page, perPage, {
        sort: "-updated",
        expand: "industry_tags,service_tags",
      });

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

async function getAllInsight() {
  try {
    let response = await pb.collection("insights").getFullList<TInsight>({
      sort: "-created",
    });

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

export { getInsightList, getInsightDetail, getInsightForHome, getAllInsight };
