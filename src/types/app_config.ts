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

export type TAddressConfig = {
  id: string;
  key: string;
  value: TAddress;
};

export type TAddress = {
  title: string;
  address: string;
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

export type TConfigMoresTechAFCBanner = {
  id: string;
  key: string;
  files: string;
};
