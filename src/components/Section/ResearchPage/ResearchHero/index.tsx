import Image from "next/image";

export const ResearchHero = () => {
  return (
    <section className="relative w-full h-[400px] min-h-[400px] max-h-[400px] flex items-center overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/Mores-Research.jpg"
          alt="Mores Research Banner"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      {/* 💡 PERBAIKAN: Menggabungkan kelas max-w desktop dengan section-padding-x mobile */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto section-padding-x md:px-8 lg:px-12 xl:px-16">
        <h1 className="font-supplymono text-[32px] md:text-[40px] lg:text-[48px] uppercase text-white tracking-wider">
          MORES RESEARCH
        </h1>
      </div>
    </section>
  );
};