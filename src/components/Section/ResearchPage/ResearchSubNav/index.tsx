"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

export const ResearchSubNav = () => {
  const t = useTranslations("ResearchPage.subNav");
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const scrollToView = (id: string) => {
    setActiveMenuId(id);

    const targetId = id === "overview" ? "research-overview" : id;
    const section = document.getElementById(targetId);
    
    if (section) {
      const offset = -100;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: sectionPosition + offset,
        behavior: "smooth",
      });
    }
  };

  const menus = [
    { name: t("overview"), id: "overview" },
    { name: t("fellowship"), id: "fellowship" },
    { name: t("newsletter"), id: "newsletter" },
  ];

  return (
    // 💡 PERBAIKAN 1: Menghapus h-[80px] mutlak di mobile agar tinggi membungkus konten secara dinamis (py-4), md:h-[80px] tetap aktif di desktop
    <div className="w-full bg-white border-b border-[#989898] sticky top-[70px] z-[99] py-4 md:h-[80px] md:py-0 flex items-center">
      
      {/* 💡 PERBAIKAN 2: Mengubah arah flex menjadi flex-col di mobile agar bertumpuk ke bawah, kembali ke flex-row md:items-center di desktop */}
      <div className="max-w-[1280px] mx-auto section-padding-x md:px-8 lg:px-12 xl:px-16 w-full flex flex-col md:flex-row items-start md:items-center justify-start overflow-hidden gap-y-2 md:gap-y-0">
        
        {/* SISI KIRI: Mores Research */}
        {/* 💡 PERBAIKAN 3: Menghapus kelas 'hidden' agar tulisan judul muncul di mobile, menambahkan mb-1 block */}
        <div className="block font-supplymono text-[16px] font-normal text-black uppercase min-w-[223px] tracking-wide mb-1 md:mb-0">
          {t("title")}
        </div>

        {/* GARIS PEMBATAS VERTIKAL */}
        {/* Tetap disembunyikan di mobile (hidden md:block) karena posisi baris menu sudah berpindah di bawah teks judul */}
        <div className="hidden md:block h-[35px] w-[1px] bg-[#A0A0A0] mx-6 lg:mx-8" />

        {/* SISI KANAN: Menu Navigasi */}
        <div className="flex items-center gap-[29px] font-supplymono text-[14px] font-normal overflow-x-auto whitespace-nowrap w-full md:w-auto scrollbar-none py-2 pl-1 md:pl-0">
          {menus.map((menu) => (
            <div
              key={menu.id}
              onClick={() => scrollToView(menu.id)}
              className={`cursor-pointer uppercase transition-all duration-200 flex-shrink-0 ${
                activeMenuId === menu.id
                  ? "text-[#00A2B6] underline underline-offset-4"
                  : "text-black hover:text-[#00A2B6]"
              }`}
            >
              {menu.name}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};