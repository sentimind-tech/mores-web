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

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [servicesList, setServicesList] = useState<TService[] | null>(null);
  const [industriesList, setIndustriesList] = useState<TIndustry[] | null>(
    null
  );

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  const handleOpenNavbar = () => {
    setOpenNavbar(true);

    fetchDataServices();
    fetchDataIndustries();
  };

  const fetchDataServices = async () => {
    const data = await getAllServices();

    setServicesList(data);
  };

  const fetchDataIndustries = async () => {
    const data = await getIndustryList();

    setIndustriesList(data);
  };

  return (
    <>
      <div className="sticky z-[100] top-0 top px-[1rem] md:px-[2.5rem] xl:px-[3.125rem] bg-white">
        <div className="w-full py-[1.063rem] flex justify-between items-center">
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
            <Link href="/">
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

          <div className="hidden md:flex items-center gap-[1.5rem] cursor-pointer">
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

          <div className="fixed w-[24px] h-[24px] right-[1rem] flex justify-center items-center z-[100] md:hidden">
            <div
              id="nav-icon3"
              className={`relative z-30 block md:hidden ${
                openNavbar ? "open" : ""
              }`}
              onClick={handleNavbar}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
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
      />
    </>
  );
};

export default Header;
