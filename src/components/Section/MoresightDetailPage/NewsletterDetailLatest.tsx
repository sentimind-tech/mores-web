"use client";

import React from "react";
import { useLocale } from "next-intl";
import { MoresightCard, TMoresightItem } from "@/components/Section/MoresightPage/MoresightList/MoresightCard";

type NewsletterDetailLatestProps = {
  newsletters: TMoresightItem[];
  btnReadText: string;
};

export const NewsletterDetailLatest = ({ newsletters, btnReadText }: NewsletterDetailLatestProps) => {
  const locale = useLocale();

  // Jika tidak ada rekomendasi newsletter lain di database, sembunyikan seksi ini
  if (!newsletters || newsletters.length === 0) return null;

  return (
    <section className="w-full bg-[#F9F9F9] pt-16 pb-20 border-t border-b border-[#EAEAEA]">
      <div className="max-w-[1280px] mx-auto section-padding-x md:px-8 lg:px-12 xl:px-16 w-full flex flex-col">
        
        {/* Judul Seksi Rekomendasi */}
        <div className="w-full pb-6 mb-4">
          <h2 className="font-sans text-[22px] leading-[28px] text-black font-semibold uppercase tracking-wider">
            {locale === "id" ? "Edisi Terbaru Lainnya" : "Other Latest Issues"}
          </h2>
        </div>

        {/* List Grid Kartu Rekomendasi */}
        <div className="w-full flex flex-col">
          {newsletters.map((item) => {
            // Saring teks dinamis berdasarkan bahasa rute lokal yang aktif
            const localizedItem = {
              id: item.id,
              // 💡 PERBAIKAN DI SINI: Alihkan slug mengikuti bahasa aktif agar routing rekomendasi akurat
              slug: locale === "id" ? item.slug_id : item.slug_en,
              volume: item.volume,
              type: item.type,
              cover_image: item.cover_image,
              title: locale === "id" ? item.title_id : item.title_en,
              excerpt: locale === "id" ? item.excerpt_id : item.excerpt_en,
            };

            return (
              <MoresightCard
                key={item.id}
                item={localizedItem}
                btnReadText={btnReadText}
                locale={locale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};