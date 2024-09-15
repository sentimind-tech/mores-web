import { pb } from "@/lib/pocketbase";
import { TIndustry } from "@/types/industry";

async function getIndustryList() {
    try {
        let response = await pb
            .collection("industries")
            .getFullList<TIndustry>({
                sort: "name",
            });

        return response;
    } catch (error) {
        console.log(error);
        return null; // Return empty on error
    }
}

async function getIndustryDetail(id: string) {
    try {
        let response = await pb
            .collection("industries")
            .getOne<TIndustry>(id);

        return response;
    } catch (error) {
        console.log(error);
        return null; // Return empty on error
    }
}



export { getIndustryList, getIndustryDetail };
