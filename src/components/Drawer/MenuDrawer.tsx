"use client";

import { useState, useEffect } from "react";
import Drawer, { TDrawerComponentProps } from "@/components/Drawer";
import Image from "next/image";
import MenuContent from "../Header/MenuContent";
import withDimension, { TWithDimensionProps } from "@/utils/withDimension";
import { BodyText, HeadingText } from "../Text";
import Link from "next/link";
import { TIndustry } from "@/types/industry";
import { TService } from "@/types/service";
import { TMenuServicesProps } from "@/types/Menu";
import { useLocale } from "next-intl";

import navmenu from "@/data/navmenu.json";

type TMenuDrawerProps = TDrawerComponentProps &
  TWithDimensionProps & {
    industries: TIndustry[];
    services: TService[];
  };

const menuData = [
  {
    slug: "who-we-are",
    data: {
      title: "Who we are",
      menus: [
        {
          title: "About Mores / Mission",
          link: "/about",
        },
        {
          title: "Our Team",
          link: "/about#our-team",
        },
      ],
      thumb: "/images/thumb/thumb-menu-who-we-are.jpg",
      thumb_name: "MORES /’MÔRĀZ’/",
      thumb_desc:
        "“The customs, values, and behaviors that are accepted by a particular group, culture, and community”",
    },
  },
  {
    slug: "what-we-do",
  },
  {
    slug: "insight",
    data: {
      title: "Insight",
      menus: [
        {
          title: "Insight",
          link: "/insights",
        },
      ],
      thumb: "/images/thumb/thumb-menu-insight.jpg",
      thumb_name: "Insight",
      thumb_desc:
        "Discover a diverse range of the latest insights and perspectives from Mores Strategics that can keep you up-to-date with global issues.",
    },
  },
  {
    slug: "careers",
    data: {
      title: "CAREERS",
      menus: [
        {
          title: "Job",
          link: "/careers",
        },
        {
          title: "Life at Mores",
          link: "/careers#life-at-mores",
        },
        {
          title: "Work at Mores",
          link: "/careers#work-at-mores",
        },
      ],
      thumb: "/images/thumb/thumb-menu-career.jpg",
      thumb_name: "CAREERS",
      thumb_desc:
        "We don’t just address and overcome business challenges — we collaborate with you to shape and create the future, paving the way for innovation, growth, and long-term success.",
    },
  },
  {
    slug: "mores-tech",
    data: {
      title: "MORES TECH",
      menus: [
        {
          title: "Mores Tech Profile",
          link: "/tech/profile",
        },
        {
          title: "Mores tech Service",
          link: "/tech-services",
        },
      ],
      thumb: "/images/thumb/thumb-menu-tech.jpg",
      thumb_name: "Mores Tech",
      thumb_desc:
        "Unifying Vision Through Technology Solution: Leveraging cutting edge technology to bring together diverse perspectives, align strategic goals, and propel success across every facet of your organization.",
    },
  },
  {
    slug: "contact",
    data: {
      title: "Contact",
      menus: [
        {
          title: "Office",
          link: "/contact",
        },
        {
          title: "Contact",
          link: "/contact",
        },
      ],
      thumb: "/images/thumb/thumb-menu-contact.jpg",
      thumb_name: "CONTACT",
      thumb_desc:
        "Connect with us to get the best solutions for your company, tailored to your specific needs. Vision Through Technology Solution: Leveraging cutting edge technology to bring together diverse perspectives, align strategic goals, and propel success across every facet of your organization.",
    },
  },
];

const MenuDrawer = (props: TMenuDrawerProps) => {
  const { isOpen, onClose, setClose, windowDimension, industries, services } =
    props;
  const [windowWidth, setWindowWidth] = useState(windowDimension.width);
  const [heightContainerMenu, setHeightContainerMenu] = useState<number>(0);
  const [selectedMenu, setSelectedMenu] = useState<string | null>();
  const localActive = useLocale();

  const handleCloseDrawer = () => {
    setClose && setClose(false);

    if (windowWidth >= 1024) {
      setSelectedMenu(menuData[0].slug);
    } else {
      setSelectedMenu(null);
    }
  };

  const handleMouseEnterMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.getAttribute("data-target");

    if (target) {
      const targetId = document.getElementById(target);
      const targetHeight = targetId?.getBoundingClientRect().height;

      setHeightContainerMenu(targetHeight ?? 0);
      setSelectedMenu(target);
    }
  };

  useEffect(() => {
    setWindowWidth(windowDimension.width);
  }, [windowDimension]);

  useEffect(() => {
    const setInitialMenu = windowWidth >= 1024 ? menuData[0].slug : null;

    setSelectedMenu(setInitialMenu);
  }, [windowWidth]);

  const transformData = (data: TService[]): TMenuServicesProps[] => {
    const groupedData: TMenuServicesProps[] = [];

    if (data == undefined || data == null) return [];

    data
      .filter((service) => service.parent_service_id === "")
      .map((service) => {
        const transform = {
          name: service.name,
          name_link: `/${localActive}/services/${service.id}`,
          submenu: data
            .filter((item) => item.parent_service_id === service.id)
            .map((item) => ({
              title: item.name,
              link: `/${localActive}/services/${item.id}/${item.parent_service_id}`,
            })),
        };

        groupedData.push(transform);
      });

    return groupedData;
  };

  const transformedServiceData = transformData(services);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      direction="top"
      enableOverlay={false}
    >
      <div
        className={`w-full bg-white-smoke h-[100dvh] lg:h-auto flex max-h-[100dvh] group ${
          isOpen ? "active-drawer" : ""
        }`}
      >
        <div className="relative lg:z-auto w-full lg:w-[332px] bg-black shrink-0 flex flex-col items-center pt-[1.063rem]">
          <div className="w-full lg:max-w-[210px] py-16 px-32 md:px-[2.5rem] lg:p-0">
            <div className="flex justify-between items-center">
              <Link href={`/${localActive}`}>
                <div className="relative block w-[7.688rem] md:w-[9.875rem] aspect-[16/5] z-[0]">
                  <Image
                    src="/images/logo-mores-main-white.png"
                    alt="Main Logo"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full object-center object-contain"
                  />
                </div>
              </Link>

              <div
                className="w-[24px] h-[24px] cursor-pointer block lg:hidden"
                onClick={handleCloseDrawer}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z"
                    fill="#00A2B6"
                  />
                </svg>
              </div>
            </div>

            <div className="font-supplymono flex flex-col gap-[2.5rem] my-[3.688rem]">
              {navmenu.map((item, index) => (
                <div
                  className={`flex items-center justify-between gap-12 group cursor-default ${
                    selectedMenu == item.target ? "active" : ""
                  }`}
                  data-target={item.target}
                  key={index}
                  {...{
                    ...(windowWidth >= 1024
                      ? {
                          onMouseEnter: handleMouseEnterMenu,
                        }
                      : {
                          onClick: handleMouseEnterMenu,
                        }),
                  }}
                >
                  <BodyText className="text-18 leading-[1.35rem] uppercase text-white transition-all group-[.active]:text-blue-pacific">
                    {item.title}
                  </BodyText>

                  <div className="shrink-0 transition-all rotate-0 group-[.active]:rotate-90">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.071 8.071L5.414 13.728L4 12.314L8.95 7.364L4 2.414L5.414 1L11.071 6.657C11.2585 6.84453 11.3638 7.09884 11.3638 7.364C11.3638 7.62916 11.2585 7.88347 11.071 8.071Z"
                        className="transition-all fill-white group-[.active]:fill-blue-pacific"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`absolute top-[-100%] left-0 lg:relative lg:z-auto w-[100vw] lg:w-full h-full lg:h-auto transition-all duration-500 ${
            windowWidth < 1024 && selectedMenu ? "top-[0]" : ""
          }`}
        >
          <div className="bg-white w-full h-[83px] hidden lg:flex items-center gap-[1.313rem] px-[2.625rem]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type to search ..."
                className="border-0 w-full outline-0 h-[50px] pr-[1.875rem]"
              />
              <div className="absolute w-[29px] h-[28px] right-0 top-[1px] bottom-0 m-auto cursor-pointer">
                <svg width="29" height="28" viewBox="0 0 29 28" fill="none">
                  <path
                    d="M26.2812 23.4062L19.2532 16.6195C20.3858 15.1168 20.9951 13.3057 20.9932 11.4472C20.9932 6.58274 16.8941 2.625 11.856 2.625C6.81777 2.625 2.71869 6.58274 2.71869 11.4472C2.71869 16.3116 6.81777 20.2694 11.856 20.2694C13.7808 20.2712 15.6566 19.6829 17.213 18.5894L24.2421 25.375L26.2812 23.4062ZM11.856 17.483C10.6194 17.4832 9.41054 17.1292 8.38232 16.466C7.3541 15.8027 6.55268 14.86 6.07941 13.7569C5.60614 12.6539 5.48228 11.4401 5.7235 10.2691C5.96472 9.09813 6.56017 8.0225 7.43456 7.17826C8.30895 6.33402 9.423 5.75909 10.6358 5.5262C11.8486 5.2933 13.1058 5.41288 14.2482 5.86983C15.3906 6.32678 16.367 7.10057 17.054 8.09333C17.7409 9.0861 18.1075 10.2533 18.1074 11.4472C18.1054 13.0474 17.4462 14.5816 16.2742 15.7131C15.1023 16.8446 13.5133 17.4812 11.856 17.483Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            <div
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={handleCloseDrawer}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z"
                  fill="#00A2B6"
                />
              </svg>
            </div>
          </div>

          <div className="relative w-full h-full lg:h-[calc(100%_-_83px)] overflow-auto">
            <div
              className="w-full relative transition-all overflow-hidden bg-white lg:bg-transparent"
              style={{
                height:
                  windowWidth >= 1024 && heightContainerMenu !== 0
                    ? heightContainerMenu
                    : "100%",
              }}
            >
              <div
                className="w-[24px] h-[24px] cursor-pointer absolute z-[20] top-32 right-24 block lg:hidden"
                onClick={() => setSelectedMenu(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z"
                    fill="#00A2B6"
                  />
                </svg>
              </div>
              {menuData &&
                menuData.map((item, index) =>
                  item.slug === "what-we-do" ? (
                    <div
                      className={`absolute w-full top-0 left-0 opacity-0 transition-all ${
                        selectedMenu == "what-we-do"
                          ? "opacity-100 visible"
                          : "invisible"
                      }`}
                      id="what-we-do"
                      key={index}
                    >
                      <div className="px-20 lg:px-[2.625rem] py-24 lg:py-[1.875rem] w-full h-full block">
                        <div className="w-full block pb-[1.188rem] border-b border-gray-cloud">
                          <HeadingText
                            type="h3"
                            className="uppercase text-blue-pacific leading-[1.8rem]"
                          >
                            What we do
                          </HeadingText>
                        </div>
                        <div className="w-full block pt-[1.25rem]">
                          <div className="block">
                            <Link href={`/${localActive}/services`}>
                              <BodyText
                                type="body1"
                                className="leading-[1.125] font-medium !font-graphik text-black block mb-12 lg:mb-[1.25rem] transition-all duration-300 hover:text-blue-pacific"
                              >
                                Services
                              </BodyText>
                            </Link>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-32 mb-32">
                              {transformedServiceData.map((item, idx) => (
                                <div className="block py-4 lg:py-0" key={idx}>
                                  <Link
                                    href={item.name_link}
                                    className="inline-block transition-all duration-300 hover:text-blue-pacific"
                                    key={idx}
                                  >
                                    <BodyText
                                      type="body2"
                                      className="leading-[1.063rem]"
                                    >
                                      {item.name}
                                    </BodyText>
                                  </Link>

                                  {item.submenu && item.submenu.length > 0 && (
                                    <div className="pl-[1.375rem] flex flex-col items-start gap-[0.375rem] pt-[0.625rem]">
                                      {item.submenu.map((submenuitem, idx) => (
                                        <Link
                                          href={item.name_link}
                                          className="inline-block transition-all duration-300 hover:text-blue-pacific"
                                          key={idx}
                                        >
                                          <BodyText
                                            className="text-[0.625rem] leading-[0.75rem] block"
                                            key={idx}
                                          >
                                            {submenuitem.title}
                                          </BodyText>
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>

                            {industries !== null && (
                              <>
                                <Link href={`/${localActive}/industries`}>
                                  <BodyText
                                    type="body1"
                                    className="leading-[1.125] font-medium !font-graphik text-black block mb-12 lg:mb-[1.25rem] transition-all duration-300 hover:text-blue-pacific"
                                  >
                                    Industries
                                  </BodyText>
                                </Link>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                                  {industries.map((item, index) => (
                                    <div
                                      className="block py-4 lg:py-0"
                                      key={index}
                                    >
                                      <Link
                                        href={`/${localActive}/industries/${item.id}`}
                                        className="inline-block transition-all duration-300 hover:text-blue-pacific"
                                      >
                                        <BodyText
                                          type="body2"
                                          className="leading-[1.063rem] capitalize"
                                        >
                                          {item.name}
                                        </BodyText>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )}

                            <BodyText
                              type="body1"
                              className="leading-[1.125] font-medium !font-graphik text-black block mb-12 lg:mb-[1.25rem]"
                            >
                              Client Stories
                            </BodyText>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                              <div className="block py-4 lg:py-0">
                                <Link
                                  href={`/${localActive}/client-stories`}
                                  className="inline-block transition-all duration-300 hover:text-blue-pacific"
                                >
                                  <BodyText
                                    type="body2"
                                    className="leading-[1.063rem]"
                                  >
                                    Client Stories
                                  </BodyText>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`absolute w-full top-0 left-0 opacity-0 transition-all ${
                        selectedMenu == item.slug
                          ? "opacity-100 visible"
                          : "invisible"
                      }`}
                      id={item.slug}
                      key={index}
                    >
                      <div className="px-20 lg:px-[2.625rem] py-24 lg:py-[1.875rem]">
                        <MenuContent {...item} />
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default withDimension(MenuDrawer);
