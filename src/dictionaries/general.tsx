import {
  SELECTED_MENU_HOME,
  SELECTED_MENU_INSIGHT,
  SELECTED_MENU_SERVICE,
  SELECTED_MENU_INDUSTRY,
  SELECTED_MENU_CAREER,
  SELECTED_MENU_CONTACT,
  SELECTED_MENU_ABOUT,
  SELECTED_MENU_TECH,
  SELECTED_MENU_CLIENTSTORIES,
} from "@/store/constants";

type ActiveMenuStateProps = {
  [key: string]: string;
};

export const ACTIVE_MENU_STATE: ActiveMenuStateProps = {
  [SELECTED_MENU_HOME]: "who-we-are",
  [SELECTED_MENU_INSIGHT]: "insight",
  [SELECTED_MENU_SERVICE]: "what-we-do",
  [SELECTED_MENU_INDUSTRY]: "what-we-do",
  [SELECTED_MENU_CAREER]: "careers",
  [SELECTED_MENU_CONTACT]: "contact",
  [SELECTED_MENU_ABOUT]: "who-we-are",
  [SELECTED_MENU_TECH]: "mores-tech",
  [SELECTED_MENU_CLIENTSTORIES]: "what-we-do",
};
