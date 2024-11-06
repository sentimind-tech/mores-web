"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { BodyText } from "../Text";
import "./style.css";
import MenuDrawer from "../Drawer/MenuDrawer";
import Link from "next/link";
import { getAllServices } from "@/services/service";
import { TService } from "@/types/service";
import { TIndustry } from "@/types/industry";
import { getIndustryList } from "@/services/industry";
import { useLocale } from "next-intl";
import { useRouter, Locale, usePathname } from "@/i18n/routing";
import { getMoresTechService } from "@/services/mores_tech";
import { TMoresTechServiceProps } from "@/types/mores_tech";
import { TMenuServicesProps } from "@/types/Menu";
import VisitedPages from "../VisitedPages";

type THeaderProps = {
  selectedMenu: string;
};

const Header = (props: THeaderProps) => {
  const { selectedMenu } = props;
  const [openNavbar, setOpenNavbar] = useState(false);
  const [openSuggest, setOpenSuggest] = useState(false);
  const [servicesList, setServicesList] = useState<TMenuServicesProps[] | null>(
    null
  );
  const [industriesList, setIndustriesList] = useState<TIndustry[] | null>(
    null
  );
  const [moresTechService, setMoresTechService] = useState<
    TMoresTechServiceProps[] | null
  >(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const localActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const pathslash = pathname.split("/")[1];

  const menuServiceStore: any =
    (typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("serviceMenuStorage")) ??
    "";

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleOpenNavbar = () => {
    setOpenNavbar(true);

    fetchData();
  };

  const handleOpenSuggest = () => {
    if (pathslash == "search") return goToScrollInput("search-container");

    setOpenSuggest(true);
  };
  const handleCloseSuggest = () => setOpenSuggest(false);

  const transformData = (data: TService[]): TMenuServicesProps[] => {
    const groupedData: TMenuServicesProps[] = [];

    if (data == undefined || data == null) return [];

    data
      .filter((service) => service.parent_service_id === "")
      .sort((a, b) => a.order - b.order)
      .map((service) => {
        const transform = {
          name: service.name,
          name_link: `/${localActive}/services/${service.id}`,
          submenu: data
            .filter((item) => item.parent_service_id === service.id)
            .sort((x, y) => x.order - y.order)
            .map((item) => ({
              title: item.name,
              link: `/${localActive}/services/${item.parent_service_id}/${item.id}`,
              order: item.order,
            })),
          order: service.order,
        };

        groupedData.push(transform);
      });

    return groupedData;
  };

  const fetchDataServices = async () => {
    try {
      const data = await getAllServices({
        sort: "-created",
      });

      if (data) {
        const transformedServiceData = transformData(data);
        const stringGrouped = JSON.stringify(transformedServiceData);
        let serviceStorage = null;

        if (stringGrouped == menuServiceStore) {
          serviceStorage = JSON.parse(menuServiceStore);
        } else {
          serviceStorage = transformedServiceData;
        }

        setServicesList(serviceStorage);

        localStorage.setItem(
          "serviceMenuStorage",
          JSON.stringify(serviceStorage)
        );
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchDataIndustries = async () => {
    try {
      const data = await getIndustryList();

      if (data) {
        setIndustriesList(data);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchDataMoresTech = async () => {
    try {
      const bannerRes = await getMoresTechService();

      if (bannerRes) {
        setMoresTechService(bannerRes.items);
      }

      return;
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    fetchDataServices();
    fetchDataIndustries();
    fetchDataMoresTech();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setOpenSuggest(false);
    }
  };

  const goToScrollInput = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    document.getElementById("input-search")?.focus();
  };

  const handleEnterSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = (event.target as HTMLInputElement).value;

      const nextLocale = localActive as Locale;

      router.push(`/search?result=${inputValue}`, { locale: nextLocale });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (menuServiceStore) {
      const parseServiceStorage = JSON.parse(menuServiceStore);
      setServicesList(parseServiceStorage);
    }
  }, [menuServiceStore]);

  return (
    <>
      <div className="sticky z-[100] top-0 top px-[1rem] md:px-[2.5rem] xl:px-[3.125rem] bg-white">
        <div className="w-full">
          <div className="flex justify-between relative h-[83px]">
            <div className="flex gap-32 items-center relative shrink-0">
              <div className="w-[24px] h-[24px] right-[1rem] hidden justify-center items-center z-[100] md:flex">
                <div
                  id="nav-icon3"
                  className={`relative z-30 ${openNavbar ? "open" : ""}`}
                  onClick={handleOpenNavbar}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <Link href={`/${localActive}`}>
                <div className="relative block w-[7.688rem] md:w-[9.875rem] aspect-[16/5] z-[0]">
                  <Image
                    src="/images/logo-mores-main.png"
                    alt="Main Logo"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full object-center object-contain"
                  />
                </div>
              </Link>
            </div>
            <div className="flex-1 flex justify-end items-center relative h-full">
              {pathslash !== "search" && (
                <div className="hidden md:block">
                  <div
                    className="flex items-center gap-[1.5rem] cursor-pointer"
                    onClick={handleOpenSuggest}
                  >
                    <BodyText className="uppercase text-[1.125rem] leading-[1.5rem] tracking-[-0.02em] select-none font-supplymono text-black">
                      Explore
                    </BodyText>

                    <div className="shrink-0">
                      <svg
                        width="29"
                        height="28"
                        viewBox="0 0 29 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0"
                      >
                        <path
                          d="M26.2812 23.4062L19.2533 16.6195C20.3859 15.1168 20.9951 13.3057 20.9933 11.4472C20.9933 6.58274 16.8942 2.625 11.856 2.625C6.81783 2.625 2.71875 6.58274 2.71875 11.4472C2.71875 16.3116 6.81783 20.2694 11.856 20.2694C13.7809 20.2712 15.6567 19.6829 17.2131 18.5894L24.2422 25.375L26.2812 23.4062ZM11.856 17.483C10.6194 17.4832 9.4106 17.1292 8.38238 16.466C7.35416 15.8027 6.55274 14.86 6.07947 13.7569C5.6062 12.6539 5.48234 11.4401 5.72356 10.2691C5.96478 9.09813 6.56023 8.0225 7.43462 7.17826C8.30901 6.33402 9.42306 5.75909 10.6359 5.5262C11.8487 5.2933 13.1058 5.41288 14.2482 5.86983C15.3907 6.32678 16.3671 7.10057 17.054 8.09333C17.741 9.0861 18.1076 10.2533 18.1074 11.4472C18.1055 13.0474 17.4462 14.5816 16.2743 15.7131C15.1023 16.8446 13.5134 17.4812 11.856 17.483Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              <div
                className={`absolute w-[90%] top-0 right-0 bg-white h-full flex items-center transition-all duration-[400ms] ${
                  openSuggest ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                ref={searchContainerRef}
              >
                <div className="w-full flex items-center">
                  <div className="shrink-0">
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none">
                      <path
                        d="M26.2812 23.4062L19.2533 16.6195C20.3859 15.1168 20.9951 13.3057 20.9933 11.4472C20.9933 6.58274 16.8942 2.625 11.856 2.625C6.81783 2.625 2.71875 6.58274 2.71875 11.4472C2.71875 16.3116 6.81783 20.2694 11.856 20.2694C13.7809 20.2712 15.6567 19.6829 17.2131 18.5894L24.2422 25.375L26.2812 23.4062ZM11.856 17.483C10.6194 17.4832 9.4106 17.1292 8.38238 16.466C7.35416 15.8027 6.55274 14.86 6.07947 13.7569C5.6062 12.6539 5.48234 11.4401 5.72356 10.2691C5.96478 9.09813 6.56023 8.0225 7.43462 7.17826C8.30901 6.33402 9.42306 5.75909 10.6359 5.5262C11.8487 5.2933 13.1058 5.41288 14.2482 5.86983C15.3907 6.32678 16.3671 7.10057 17.054 8.09333C17.741 9.0861 18.1076 10.2533 18.1074 11.4472C18.1055 13.0474 17.4462 14.5816 16.2743 15.7131C15.1023 16.8446 13.5134 17.4812 11.856 17.483Z"
                        fill="#00A2B6"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 px-20">
                    <input
                      type="text"
                      className="w-full outline-0 border-0 font-graphik text-18 leading-[1.25rem]"
                      placeholder="Search insight, service and more"
                      onKeyDown={handleEnterSearch}
                    />
                  </div>
                  <div className="shrink-0">
                    <div
                      className="cursor-pointer"
                      onClick={handleCloseSuggest}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M2 20L0 18L8 10L0 2L2 0L10 8L18 0L20 2L12 10L20 18L18 20L10 12L2 20Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute w-full bg-white left-0 top-[100%] font-graphik transition-all duration-[400ms] origin-top delay-500 shadow-drawer-suggest ${
                    openSuggest ? "scale-y-100 delay-0" : "scale-y-0"
                  }`}
                >
                  <div className="w-full py-12 px-[50px] pb-32">
                    <VisitedPages />
                  </div>
                </div>
              </div>

              <div className="absolute w-[24px] h-[24px] right-0 flex justify-center items-center z-[100] md:hidden">
                <div
                  id="nav-icon3"
                  className={`relative z-30 block md:hidden ${
                    openNavbar ? "open" : ""
                  }`}
                  onClick={handleOpenNavbar}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MenuDrawer
        isOpen={openNavbar}
        onClose={handleNavbar}
        setClose={setOpenNavbar}
        industries={industriesList}
        services={servicesList}
        activeMenu={selectedMenu}
        techService={moresTechService}
      />
    </>
  );
};

export default Header;
