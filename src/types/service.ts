export type TService = {
    id: number,
    parent_service_id?: number,
    name: string,
    description: string,
    overview?: string,
    how_we_help?: string,
    cover_image?: string,
    is_featured?: boolean,
    is_show_on_menu?: boolean,
    our_experiences?: string,
    button_image?: string,
    slug?: string,
}