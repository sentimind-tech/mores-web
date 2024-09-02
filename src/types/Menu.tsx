type TMenuLinkProps = {
  title: string;
  link: string;
};

type TMenuItemProps = {
  title: string;
  menus: TMenuLinkProps[];
  thumb: string;
  thumb_name: string;
  thumb_desc: string;
};

export type TMenuContentProps = {
  slug: string;
  data?: TMenuItemProps;
};
