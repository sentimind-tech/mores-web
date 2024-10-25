import { type } from "os";

export type TAppConfig = {
  id: string;
  key: string;
  value: TValue;
};

export type TValue = {
  title?: string;
  url: string;
};

export type TConfigHighlightList = {
  id: string;
  key: string;
  insight: string[];
};

export type TConfigFooterBanner = {
  id: string;
  key: string;
  active: boolean;
};
