export type TService = {
  id: string;
  parent_service_id?: string;
  name: string;
  description: string;
  overview_id: string;
  overview_en: string;
  how_we_help: string;
  cover_image: string;
  is_featured: boolean;
  is_show_on_menu: boolean;
  our_experiences: string[];
  button_image: string;
};
