"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const MoresightFilter = () => {
  const t = useTranslations("MoresightPage.filter");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Ambil state awal langsung dari URL agar sinkron
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedFilter, setSelectedFilter] = useState(searchParams.get("sort") || "all");

  // Perbarui parameter URL ketika nilai state search atau dropdown berubah
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (searchQuery) params.set("search", searchQuery);
    else params.delete("search");

    if (selectedFilter && selectedFilter !== "all") params.set("sort", selectedFilter);
    else params.delete("sort");

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchQuery, selectedFilter]);

  return (
    <section className="w-full bg-white pt-[40px] pb-[20px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full">
        
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-y-6 sm:gap-x-12">
          
          {/* SEARCH COMPONENT (SISI KIRI) */}
          <div className="relative w-full sm:max-w-[636px] flex items-center border-b-[1.5px] border-[#B6B6B6] pb-[10px]">
            <span className="absolute left-0 text-[#00A2B6] pointer-events-none z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent border-none pl-[52px] pr-2 py-1 font-graphik text-[18px] leading-[22px] text-black placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* DROPDOWN COMPONENT (SISI KANAN) */}
          <div className="relative w-full sm:max-w-[333px] flex items-center border-b-[1.5px] border-[#B6B6B6] pb-[10px]">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full appearance-none bg-transparent border-none pr-8 pl-1 font-inter text-[15px] leading-[24px] text-[#00A2B6] font-normal focus:outline-none cursor-pointer"
            >
              <option value="all">{t("allResult")}</option>
              <option value="latest">Latest Edition</option>
              <option value="older">Older Edition</option>
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#00A2B6]">
              <svg width="16" height="12" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};