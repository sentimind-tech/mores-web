import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const ResearchFellowship = () => {
  const t = useTranslations("ResearchPage.fellowship");

  return (
    // 💡 PENYESUAIAN DI SINI: Mengubah scroll-mt-[80px] menjadi scroll-mt-[120px] agar tidak terpotong sticky header
    <section id="fellowship" className="w-full bg-white scroll-mt-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full">
        
        {/* GARIS PEMBATAS */}
        <div className="w-full h-[1px] bg-[#B6B6B6] mb-[50px]" />

        {/* WRAPPER KONTEN */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-8 lg:gap-x-12 items-start pb-[60px]">
          
          {/* SISI KIRI: Teks */}
          <div className="md:col-span-7 flex flex-col justify-start md:max-w-[586px]">
            <h2 className="font-supplymono text-[24px] md:text-[26px] lg:text-[28px] leading-[40px] tracking-[-0.02em] uppercase text-[#00A2B6] mb-[7px]">
              {t("title")}
            </h2>
            
            <div className="font-sans text-[16px] leading-[24px] text-[#666666] flex flex-col gap-6">
              {/* Paragraf 1 */}
              <p dangerouslySetInnerHTML={{ __html: t("p1") }} />
              
              {/* Paragraf 2 */}
              <p dangerouslySetInnerHTML={{ __html: t("p2") }} />
              
              {/* Paragraf 3 */}
              <p dangerouslySetInnerHTML={{ __html: t("p3") }} />
            </div>
          </div>

          {/* SISI KANAN: Gambar */}
          <div className="md:col-span-5 w-full flex md:justify-end">
            <div className="relative w-full max-w-[412px] h-[455px] min-h-[455px] rounded-sm overflow-hidden shadow-sm">
              <Image
                src="/images/fellowship-program.png"
                alt="Fellowship Program"
                fill
                sizes="(max-w-768px) 100vw, 412px"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};