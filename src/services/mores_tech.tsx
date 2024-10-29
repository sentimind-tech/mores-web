import { pb } from "@/lib/pocketbase";
import { TMoresTechServiceProps } from "@/types/mores_tech";
import { TConfigMoresTechAFCBanner } from "@/types/app_config";

async function getMoresTechService(page: number = 1, perPage: number = 6) {
  try {
    let response = await pb
      .collection("mores_tech")
      .getList<TMoresTechServiceProps>(page, perPage, {
        sort: "created",
      });

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

async function getMoresTechAFCBanner(key: string) {
  try {
    const response = await pb
      .collection("app_config_files")
      .getList<TConfigMoresTechAFCBanner>(1, 1, {
        filter: `key="${key}"`,
      });

    // Check if the record is found
    if (response.items.length > 0) {
      return response.items[0]; // Return the first matched record
    } else {
      return null; // No record found
    }
  } catch (error) {
    console.log(error);
    return null; // Return null on error
  }
}

export { getMoresTechService, getMoresTechAFCBanner };
