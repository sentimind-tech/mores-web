import React from "react";
import { useTranslations } from "next-intl";

export const ResearchOverview = () => {
  const t = useTranslations("ResearchPage.overview");

  return (
    // 💡 PERUBAHAN DI SINI: Mengubah py-[0px] menjadi pt-[60px] pb-[20px] 
    // dan menyesuaikan scroll-mt-[120px] menjadi scroll-mt-[80px] agar jarak jangkarnya seimbang
    <section id="research-overview" className="w-full bg-white pt-[60px] pb-[20px] scroll-mt-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-8 lg:gap-x-12 items-start">
          
          {/* SISI KIRI */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <h2 className="font-supplymono text-[24px] md:text-[26px] lg:text-[28px] leading-[40px] tracking-[-0.02em] uppercase text-[#00A2B6] mb-[7px]">
              {t("title")}
            </h2>
            {/* Mengaktifkan tag HTML untuk Sisi Kiri */}
            <p 
              className="font-sans text-[16px] leading-[24px] text-[#666666] lg:max-w-[352px]"
              dangerouslySetInnerHTML={{ __html: t("leftParagraph") }}
            />
          </div>

          {/* SISI KANAN */}
          <div className="md:col-span-7 flex flex-col gap-6 font-sans text-[16px] leading-[24px] text-[#666666] md:pl-6 lg:pl-12">
            {/* 💡 Mengaktifkan tag HTML untuk Right Paragraph 1 */}
            <p dangerouslySetInnerHTML={{ __html: t("rightParagraph1") }} />
            
            {/* 💡 Mengaktifkan tag HTML untuk Right Paragraph 2 */}
            <p dangerouslySetInnerHTML={{ __html: t("rightParagraph2") }} />
          </div>

        </div>
      </div>
    </section>
  );
};