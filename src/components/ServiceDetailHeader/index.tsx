'use client'

export type TServiceDetailHeaderMenuItem = {
    name: string,
    id: string,
}
export type TServiceDetailHeaderProp = {
    title: string,
    menus: TServiceDetailHeaderMenuItem[],
};
export const ServiceDetailHeader = ({ title, menus }: TServiceDetailHeaderProp) => {
    const scrollToView = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return <div className="px-8 font-normal font-supplymono text-black flex">
        <div className="min-w-[255px] mr-12 border-r border-gray-steel text-16 leading-[19.2px] py-8">{title}</div>
        <div className="pl-56 text-14 leading-[16.8px] flex gap-[29px] py-8">
            {menus.map(menu => <div className="cursor-pointer" onClick={() => (scrollToView(menu.id))} key={menu.name}>{menu.name}</div>)}
        </div>
    </div>
}