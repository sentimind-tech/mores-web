"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const ResearchPriorityAreas = () => {
  const t = useTranslations("ResearchPage.priorityAreas");

  // 💡 Daftar 5 kartu SVG individual untuk tampilan mobile Anda
  const mobileCards = [
    { id: 1, src: "/images/priority/card-1.svg", alt: "Priority Area 1" },
    { id: 2, src: "/images/priority/card-2.svg", alt: "Priority Area 2" },
    { id: 3, src: "/images/priority/card-3.svg", alt: "Priority Area 3" },
    { id: 4, src: "/images/priority/card-4.svg", alt: "Priority Area 4" },
    { id: 5, src: "/images/priority/card-5.svg", alt: "Priority Area 5" },
  ];

  return (
    <section className="w-full bg-white pt-0 pb-0 flex flex-col items-center">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full flex flex-col items-center">
        
        {/* HEADER SEKSI */}
        <div className="text-center max-w-[809px] mb-12 flex flex-col items-center">
          <h2 className="font-supplymono text-[20px] leading-[28px] text-black font-normal uppercase tracking-[-0.02em] mb-3">
            {t("title")}
          </h2>
          <p className="font-sans text-[16px] leading-[24px] text-[#666666] font-normal px-4">
            {t("subtitle")}
          </p>
        </div>

        {/* 🖥️ TAMPILAN DESKTOP: Tetap menampilkan satu kesatuan file .svg besar asli Anda */}
        <div className="hidden md:flex w-full justify-center select-none pt-4">
          <div className="w-full max-w-[1127px] relative h-auto">
            <Image
              src="/images/priority/research-priority-areas.svg"
              alt="Mores Research Priority Areas Cards"
              width={1127}
              height={403}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* 📱 TAMPILAN MOBILE: Berubah menjadi slider horizontal per kartu yang bisa di-swipe */}
        <div className="block md:hidden w-full overflow-hidden -mx-4 px-4 pt-4">
          {/* Container slider dengan fitur native scroll-snap Tailwind */}
          <div className="flex gap-4 overflow-x-scroll touch-pan-x snap-x snap-mandatory scrollbar-none pb-6">
            {mobileCards.map((card) => (
              <div 
                key={card.id} 
                className="w-[82vw] sm:w-[60vw] flex-shrink-0 snap-center"
              >
                {/* Frame pembungkus kartu individual */}
                <div className="relative w-full aspect-[4/5] bg-white rounded-[8px] border border-[#EAEAEA] shadow-sm overflow-hidden flex items-center justify-center">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="82vw"
                    className="object-contain p-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};