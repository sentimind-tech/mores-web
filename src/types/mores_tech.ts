import { TResponsePaginationProps } from "./common";

export type TMoresTechServiceProps = {
  id: string;
  menu_title: string;
  menu_image: string;
  cover_image: string;
  subtitle: string;
};

export type TMoresTechServicePagination = TResponsePaginationProps & {
  items: TMoresTechServiceProps[];
};
