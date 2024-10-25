'use client'

export type TServiceDetailHeaderMenuItem = {
  name: string
  id: string
}
export type TServiceDetailHeaderProp = {
  title: string
  overview?: string
  serviceList?: any[]
  ourExperience?: string | null
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
      const offset = -100 // Offset value in pixels
      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset

      window.scrollTo({
        top: sectionPosition + offset,
        behavior: 'smooth',
      })
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
    <div className="flex items-start flex-col sm:flex-row font-normal font-supplymono text-black flex">
      <div className="min-w-[255px] sm:pr-12 sm:border-r sm:border-gray-steel text-16 leading-[19.2px] py-8 font-bold sm:font-normal">
        {title}
      </div>
      <div className="sm:pl-56 text-14 leading-[16.8px] flex gap-[29px] py-8">
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
