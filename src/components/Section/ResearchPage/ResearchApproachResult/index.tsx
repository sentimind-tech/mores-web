"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const ResearchApproachResult = () => {
  const t = useTranslations("ResearchPage.priorityAreas");

  return (
    <section id="approach-result" className="w-full bg-white pb-0 flex flex-col items-center">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full">
        
        {/* GARIS PEMBATAS ATAS */}
        <div className="w-full h-[1px] bg-[#EAEAEA] mb-14" />

        {/* CONTAINER GRID - DISAMAKAN DENGAN RESEARCH OVERVIEW */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-8 lg:gap-x-12 items-start">
          
          {/* 1. SISI KIRI: GAMBAR DEKORATIF (5 Kolom) */}
          <div className="md:col-span-5 w-full flex justify-start">
            <div className="relative w-full max-w-[412px] h-[278px] min-h-[278px] rounded-sm overflow-hidden shadow-sm bg-gray-100">
              <Image
                src="/images/research-approach-result.jpg"
                alt="Research Approach and Result Illustration"
                fill
                sizes="(max-w-768px) 100vw, 412px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* 2. SISI KANAN: KONTEN (7 Kolom) */}
          <div className="md:col-span-7 flex flex-col justify-start md:pl-6 lg:pl-12">
            {/* Heading 5 - 20px PP Supply Mono */}
            <h2 className="font-supplymono text-[20px] leading-[28px] text-black font-normal uppercase tracking-[-0.02em] mb-4">
              {t("approachTitle")}
            </h2>
            
            {/* Body1 - 16px Inter */}
            <div className="font-sans text-[16px] leading-[24px] text-[#666666] flex flex-col gap-6">
              <p dangerouslySetInnerHTML={{ __html: t("approachP1") }} />
              <p dangerouslySetInnerHTML={{ __html: t("approachP2") }} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};