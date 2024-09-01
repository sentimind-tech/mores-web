'use client'

export type TServiceDetailHeaderMenuItem = {
  name: string
  id: string
}
export type TServiceDetailHeaderProp = {
  title: string
  overview?: string
  serviceList?: any[]
  ourExperience?: string
  insights: any[]
}
export const ServiceDetailHeader = ({
  title,
  overview,
  serviceList,
  ourExperience,
  insights,
}: TServiceDetailHeaderProp) => {
  const scrollToView = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  //   Build Menu
  const menus: TServiceDetailHeaderMenuItem[] = []
  if (overview && overview != '') {
    menus.push({
      name: 'OVERVIEW',
      id: 'overview',
    })
  }
  if (serviceList && serviceList.length > 0) {
    menus.push({
      name: 'WHAT WE OFFER',
      id: 'what-we-offer',
    })
  }
  if (ourExperience && ourExperience != '') {
    menus.push({
      name: 'OUR EXPERIENCE',
      id: 'our-experience',
    })
  }
  if (insights && insights.length > 0) {
    menus.push({
      name: 'FEATURED INSIGHTS',
      id: 'featured-insight',
    })
  }
  return (
    <div className="px-8 font-normal font-supplymono text-black flex">
      <div className="min-w-[255px] pr-12 border-r border-gray-steel text-16 leading-[19.2px] py-8">
        {title}
      </div>
      <div className="pl-56 text-14 leading-[16.8px] flex gap-[29px] py-8">
        {menus.map((menu) => (
          <div
            className="cursor-pointer"
            onClick={() => scrollToView(menu.id)}
            key={menu.name}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  )
}
