import React from "react";
import { useTranslations } from "next-intl";

export const MoresightHero = () => {
  const t = useTranslations("MoresightPage.hero");

  return (
    <section className="w-full relative h-[360px] md:h-[400px] lg:h-[440px] bg-black overflow-hidden flex items-center">
      {/* Gambar Latar Belakang menggunakan Inline Style CSS */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: `url('/images/moresight-hero.jpg')` }} // Pastikan aset gambar ditaruh di folder public/images/
      />
      
      {/* Konten Teks Overlay */}
      {/* 💡 DIUBAH: Menggunakan gabungan kelas section-padding-x untuk mobile dan px asli untuk desktop */}
      <div className="relative max-w-[1280px] mx-auto section-padding-x md:px-8 lg:px-12 xl:px-16 w-full text-white flex flex-col justify-center">
        <span className="font-supplymono text-[14px] md:text-[16px] tracking-[0.05em] uppercase text-gray-300 mb-2 block">
          {t("category")}
        </span>
        <h1 className="font-supplymono text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] uppercase tracking-[-0.02em] font-medium">
          {t("title")}
        </h1>
      </div>
    </section>
  );
};