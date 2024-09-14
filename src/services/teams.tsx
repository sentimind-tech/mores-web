import { pb } from "@/lib/pocketbase";

const getTeamsList = async () => {
  try {
    let response = await pb.collection("services").getFullList<TService>({
      sort: "-created",
    });

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
};

export { getTeamsList };
