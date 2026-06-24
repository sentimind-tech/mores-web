import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface TMoresightItem {
  id: string;
  collectionId: string; // 💡 DITAMBAHKAN: Mengatasi error 'Property collectionId does not exist on type TMoresightItem' di Docker
  slug_id: string;
  slug_en: string;
  slug: string; 
  volume: string;
  type?: string;
  cover_image: string;
  hero_image: string;
  authors: string;
  publish_date: string;
  reading_time: number;
  pdf_file_en: string;
  pdf_file_id: string;
  title_en: string;
  title_id: string;
  excerpt_en: string;
  excerpt_id: string;
  content_en: string;
  content_id: string;
}

type MoresightCardProps = {
  item: {
    id: string;
    slug: string; // Akan menerima slug ter-lokalisasi (slug_id atau slug_en) dari index.tsx
    volume: string;
    type?: string;
    cover_image: string;
    title: string;
    excerpt: string; // Teks yang mengandung HTML dari PocketBase
  };
  btnReadText: string;
  locale: string;
};

export const MoresightCard = ({ item, btnReadText, locale }: MoresightCardProps) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-start gap-[29px] pt-8 pb-10 border-b-[1.5px] border-[#B6B6B6] last:border-none animate-fadeIn">
      
      {/* 1. SAMPUL NEWSLETTER */}
      <div className="relative w-[169px] h-[239px] bg-gray-100 shrink-0 shadow-sm overflow-hidden group">
        <Image
          src={item.cover_image}
          alt={item.title}
          fill
          sizes="169px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* 2. AREA KONTEN (TENGAH) */}
      <div className="flex-1 flex flex-col justify-start pt-[3px]">
        {/* Metadata Volume */}
        <span className="font-supplymono text-[11px] leading-[22px] uppercase text-[#00A2B6] tracking-wider mb-1 block">
          {item.type || "QUARTERLY REPORT"} | VOLUME {item.volume}
        </span>
        
        {/* Judul Edisi */}
        <h3 className="font-sans text-[24px] leading-[30px] text-black font-semibold uppercase mb-3">
          {item.title}
        </h3>
        
        {/* Deskripsi Singkat Berbasis HTML */}
        <div 
          className="font-sans text-[16px] leading-[25px] text-[#585858] font-normal"
          dangerouslySetInnerHTML={{ __html: item.excerpt }}
        />
      </div>

      {/* 3. TOMBOL ACTION "READ" */}
      <div className="w-full sm:w-auto shrink-0 sm:pt-[25px] flex sm:justify-end">
        {/* 💡 Otomatis mengarah ke slug yang tepat sesuai bahasa aktif */}
        <Link 
          href={`/${locale}/mores-research/newsletter/${item.slug}`}
          className="w-full sm:w-[119px] h-[42px] flex items-center justify-center bg-[#00A2B6] text-white font-supplymono text-[16px] leading-[19px] uppercase tracking-wider hover:bg-[#008D9E] transition-colors shadow-sm"
        >
          {btnReadText}
        </Link>
      </div>

    </div>
  );
};