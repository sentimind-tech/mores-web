import { TIndustry } from "./industry";
import { TService } from "./service";

type TTeamsExpand = {
  industries_expertise: TIndustry[];
  service_expertise: TService[];
};

export type TTeams = {
  id: string;
  name: string;
  type: string;
  bio_description_en: string;
  bio_description_id: string;
  photo: string;
  industries_expertise: Array<string>;
  service_expertise: Array<string>;
  expand: TTeamsExpand;
  order: number;
};

export type TTeamsSocmed = {
  id: string;
  team_id: string;
  social_name: string;
  url: string;
};
