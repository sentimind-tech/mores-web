"use client";

import React, { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { MoresightCard, TMoresightItem } from "./MoresightCard";
import { getNewsletterList } from "@/services/newsletter";

export const MoresightList = () => {
  const t = useTranslations("MoresightPage.filter");
  const locale = useLocale();
  const searchParams = useSearchParams();
  
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "all";
  
  const [currentPage, setCurrentPage] = useState(1);
  const [newsletters, setNewsletters] = useState<TMoresightItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const fetchNewsletters = async (page: number, append: boolean = false) => {
    setLoading(true);
    
    const res = await getNewsletterList(
      { 
        keyword: search,   
        sortBy: sort       
      }, 
      page, 
      3
    );
    
    if (res) {
      const baseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
      const formatted: TMoresightItem[] = res.items.map((item: any) => ({
        ...item,
        cover_image: `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.cover_image}`,
      }));

      if (append) {
        setNewsletters((prev) => [...prev, ...formatted]);
      } else {
        setNewsletters(formatted);
      }
      
      setTotalItems(res.totalItems);
      setHasMore(page * 3 < res.totalItems);
    }
    setLoading(false);
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchNewsletters(1, false);
  }, [search, sort]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchNewsletters(nextPage, true);
  };

  return (
    <section id="moresight-archive" className="w-full bg-white pb-[80px] scroll-mt-[160px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full flex flex-col min-h-[500px] relative">
        
        {loading && currentPage === 1 && (
          <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center transition-opacity duration-200">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-[#00A2B6] rounded-full animate-spin" />
              <p className="font-sans text-[14px] text-gray-500">Loading resources...</p>
            </div>
          </div>
        )}

        {/* Teks Indikator Hasil */}
        <div className="w-full pt-8 pb-6">
          <h2 className="font-sans text-[24px] leading-[32px] text-black font-semibold tracking-[-0.02em]">
            {t("resultsCount", { 
              start: newsletters.length > 0 ? 1 : 0, 
              end: newsletters.length, 
              total: totalItems 
            })}
          </h2>
        </div>

        {/* LOOPING KARTU EDISI */}
        <div className="w-full flex flex-col mt-2">
          {newsletters.map((item) => {
            const localizedItem = {
              id: item.id,
              // 💡 PERBAIKAN UTAMA: Pilih slug_id jika halaman aktif Indonesia, atau slug_en jika Inggris
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
                btnReadText={t("btnRead")} 
                locale={locale}
              />
            );
          })}
          
          {/* Tampilan jika hasil pencarian kosong */}
          {!loading && newsletters.length === 0 && (
            <div className="w-full text-center py-24 font-sans text-gray-500">
              No newsletters found matching your criteria.
            </div>
          )}
        </div>

        {/* TOMBOL MORE (LOAD MORE) */}
        {hasMore && (
          <div className="w-full flex justify-center pt-12">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="font-supplymono text-[14px] bg-white text-black border border-black uppercase px-10 py-[14px] hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Loading..." : t("btnMore")}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};