import { pb } from "@/lib/pocketbase";
import { TFooterBannerProps } from "@/types/footer_banner";

async function getFooterBannerHome(page: number = 1, perPage: number = 4) {
  try {
    let response = await pb
      .collection("footer_banner")
      .getList<TFooterBannerProps>(page, perPage, {
        sort: "created",
      });

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

export { getFooterBannerHome };
