import { pb } from "@/lib/pocketbase";
import { TInsight } from "@/types/insight";

export type TInsightParams = {
  industryId?: string;
  serviceId?: string;
  insightId?: string;
  isFeatured?: boolean;
  sortBy?: string;
  keyword?: string;
};

type TQueryParams = {
  sort: string;
  filter?: string;
  expand?: string;
  isFeatured?: string;
};

async function getInsightList(
  params: TInsightParams = {},
  page: number = 1,
  perPage: number = 10
) {
  try {
    let queryParams: TQueryParams = {
      sort: "-created",
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

    // Combine all filters into a single string using AND logic
    if (filters.length > 0) {
      queryParams.filter = filters.join(" && ");
    }
    queryParams.expand = "industry_tags,service_tags";

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
        sort: "-created",
        expand: "industry_tags,service_tags",
      });

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

export { getInsightList, getInsightDetail, getInsightForHome };
