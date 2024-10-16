import { TResponsePaginationProps } from "./common";

export type TFooterBannerProps = {
  id: string;
  title: string;
  link_url: string;
};

export type TFooterBannerPagination = TResponsePaginationProps & {
  items: TFooterBannerProps[];
};
