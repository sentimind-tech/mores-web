import { pb } from "@/lib/pocketbase";
import { TTeams, TTeamsSocmed } from "@/types/teams";
import { RecordFullListOptions } from "pocketbase";

const getTeamsList = async (
  options: RecordFullListOptions = {
    sort: "created",
  }
) => {
  try {
    let response = await pb.collection("teams").getFullList<TTeams>(options);

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
};

async function getTeamsSocmed(team_id: string) {
  try {
    let queryParams: RecordFullListOptions = {
      sort: "-created",
    };

    let filters: string[] = [];

    if (team_id) {
      filters.push(`team_id = "${team_id}"`);
    }

    // Combine all filters into a single string using AND logic
    if (filters.length > 0) {
      queryParams.filter = filters.join(" && ");
    }

    let response = await pb
      .collection("team_socials")
      .getFullList<TTeamsSocmed>(queryParams);

    return response;
  } catch (error) {
    console.log(error);
    return null; // Return empty on error
  }
}

export { getTeamsList, getTeamsSocmed };
