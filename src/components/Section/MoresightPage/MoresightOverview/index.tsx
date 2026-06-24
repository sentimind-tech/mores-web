import React from "react";
import { useTranslations } from "next-intl";

export const MoresightOverview = () => {
  const t = useTranslations("MoresightPage.overview");

  return (
    <section id="moresight-overview" className="w-full bg-white py-[60px] scroll-mt-[80px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-8 lg:gap-x-12 items-start">
          
          {/* SISI KIRI: Judul Berwarna Cyan & Subtitle Ringkas */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <h2 className="font-supplymono text-[24px] md:text-[26px] lg:text-[28px] leading-[40px] tracking-[-0.02em] uppercase text-[#00A2B6] mb-[12px]">
              {t("title")}
            </h2>
            {/* 💡 PERUBAHAN DI SINI: Mengubah text-black font-medium menjadi text-[#666666] font-normal (atau sesuai keinginan Anda) */}
            <p 
              className="font-sans text-[16px] leading-[24px] text-[#666666] font-normal lg:max-w-[352px]"
              dangerouslySetInnerHTML={{ __html: t("subtitle") }}
            />
          </div>

          {/* SISI KANAN: Detail Penjelasan Target Pembaca (3 Paragraf) */}
          <div className="md:col-span-7 flex flex-col gap-6 font-sans text-[16px] leading-[24px] text-[#666666] md:pl-6 lg:pl-12">
            <p dangerouslySetInnerHTML={{ __html: t("p1") }} />
            <p dangerouslySetInnerHTML={{ __html: t("p2") }} />
            <p dangerouslySetInnerHTML={{ __html: t("p3") }} />
          </div>

        </div>
      </div>
    </section>
  );
};