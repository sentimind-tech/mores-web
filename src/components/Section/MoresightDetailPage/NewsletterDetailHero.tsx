import React from "react";

type NewsletterDetailHeroProps = {
  title: string;
  volume: string;
  issue?: string | number; // 💡 1. TAMBAHKAN PROPERTI ISSUE DI PROPS
  type?: string;
  heroImage: string;
};

export const NewsletterDetailHero = ({
  title,
  volume,
  issue, // 💡 2. DESTRUCTURE PROPERTI ISSUE
  type = "QUARTERLY REPORT",
  heroImage,
}: NewsletterDetailHeroProps) => {
  return (
    // CONTAINER UTAMA - Height: 400px dikunci, Background menggunakan gambar dinamis dari PocketBase
    <section 
      className="w-full h-[400px] relative bg-cover bg-center flex items-center overflow-hidden"
      style={{ backgroundImage: `linear-gradient(rgba(1, 1, 1, 0.4), rgba(1, 1, 1, 0.4)), url(${heroImage})` }}
    >
      {/* Kunci Lebar Max Kontainer Layaknya Halaman Mores Lainnya */}
      {/* 💡 DIUBAH: Menyesuaikan margin responsif dengan menyematkan section-padding-x md:px-8 dst */}
      <div className="max-w-[1280px] mx-auto section-padding-x md:px-8 lg:px-12 xl:px-16 w-full flex flex-col justify-center h-full pt-[40px]">
        
        {/* GROUP KONTEN (Sisi Kiri, Left Offset disesuaikan lewat padding kontainer) */}
        <div className="max-w-[751px] flex flex-col gap-2 animate-fadeIn">
          
          {/* 1. METADATA - Font: PP Supply Mono, Size: 20px, Color: Putih, Letter Spacing: -0.02em */}
          <span className="font-supplymono text-[20px] leading-[28px] text-white tracking-[-0.02em] uppercase">
            {/* 💡 3. TAMPILKAN TEKS ISSUE JIKA TERSEDIA */}
            {type} | VOLUME {volume}{issue ? ` | ISSUE ${issue}` : ""}
          </span>
          
          {/* 2. JUDUL UTAMA - Font: PP Supply Mono, Size: 40px, Color: Putih, Weight: 400 */}
          <h1 className="font-supplymono text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] text-white font-normal tracking-[-0.02em] uppercase">
            {title}
          </h1>
          
        </div>

      </div>
    </section>
  );
};