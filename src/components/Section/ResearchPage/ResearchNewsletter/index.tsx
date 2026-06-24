import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { getLatestSingleNewsletter } from "@/services/newsletter";
import { TMoresightItem } from "@/components/Section/MoresightPage/MoresightList/MoresightCard";

export const ResearchNewsletter = async () => {
  const locale = await getLocale();
  const t = await getTranslations("MoresightPage.filter");

  const item = await getLatestSingleNewsletter();

  if (!item) return null;

  const title = locale === "id" ? item.title_id : item.title_en;
  const excerpt = locale === "id" ? item.excerpt_id : item.excerpt_en;

  const baseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
  const coverImageUrl = `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.cover_image}`;

  return (
    <section id="newsletter" className="w-full bg-white pt-16 pb-20 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full flex flex-col items-center">
        
        {/* HEADER SEKSI */}
        <div className="w-full flex items-center justify-between gap-x-6 mb-12">
          <div className="flex-1 h-[1px] bg-[#B6B6B6]" />
          <h2 className="font-supplymono text-[24px] md:text-[28px] leading-[40px] text-[#00A2B6] tracking-[-0.02em] uppercase text-center shrink-0">
            Newsletter
          </h2>
          <div className="flex-1 h-[1px] bg-[#B6B6B6]" />
        </div>

        {/* KONTEN UTAMA */}
        <div className="w-full flex flex-col sm:flex-row items-start gap-[29px] pb-12 border-b border-[#EAEAEA] mb-12">
          <div className="relative w-[169px] h-[239px] bg-gray-50 shrink-0 shadow-sm overflow-hidden mx-auto sm:mx-0">
            <Image
              src={coverImageUrl}
              alt={title}
              fill
              sizes="169px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex-1 flex flex-col pt-[3px]">
            <span className="font-supplymono text-[11px] leading-[22px] uppercase text-[#00A2B6] tracking-wider mb-1 block">
              {item.type || "QUARTERLY REPORT"} | VOLUME {item.volume}
            </span>
            <h3 className="font-sans text-[24px] leading-[30px] text-black font-semibold uppercase mb-3">
              {title}
            </h3>
            <div 
              className="font-sans text-[16px] leading-[25px] text-[#585858] font-normal prose max-w-none"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </div>

          <div className="w-full sm:w-auto shrink-0 sm:pt-[25px] flex sm:justify-end">
            <Link
              href={`/${locale}/mores-research/newsletter/${item.slug}`}
              className="w-full sm:w-[119px] h-[42px] flex items-center justify-center bg-[#00A2B6] text-white font-supplymono text-[16px] leading-[19px] uppercase tracking-wider hover:bg-[#008D9E] transition-colors shadow-sm"
            >
              {t("btnRead") || "READ"}
            </Link>
          </div>
        </div>

        {/* ================= TOMBOL BAWAH (REVISI: SPECIALZE -> MORE) ================= */}
        <div className="w-full flex justify-center">
          <Link
            href={`/${locale}/mores-research/newsletter`}
            className="w-[119px] h-[42px] flex items-center justify-center bg-[#00A2B6] text-white font-supplymono text-[16px] leading-[19px] uppercase tracking-wider hover:bg-[#008D9E] transition-colors shadow-sm"
          >
            MORE
          </Link>
        </div>

      </div>
    </section>
  );
};