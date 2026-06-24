import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Layout from "@/components/Layout";
import SectionHelp from "@/components/Section/SectionHelp";
import { getNewsletterDetail, getLatestNewslettersExcept } from "@/services/newsletter";
import { NewsletterDetailHero } from "@/components/Section/MoresightDetailPage/NewsletterDetailHero";
import { NewsletterDetailContent } from "@/components/Section/MoresightDetailPage/NewsletterDetailContent";
import { NewsletterDetailLatest } from "@/components/Section/MoresightDetailPage/NewsletterDetailLatest";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

// 💡 METADATA DINAMIS: Membuat nama tab browser berubah otomatis mengikuti judul newsletter yang dibuka
export async function generateMetadata({ params: { locale, slug } }: Props): Promise<Metadata> {
  // 💡 SEKARANG: Mengirimkan locale agar pencarian slug akurat sesuai bahasa
  const item = await getNewsletterDetail(slug, locale);
  if (!item) return { title: "Mores" };
  const title = locale === "id" ? item.title_id : item.title_en;
  return {
    title: `Mores | ${title}`,
  };
}

export default async function NewsletterDetailPage({ params: { locale, slug } }: Props) {
  // 💡 SEKARANG: Mengirimkan locale agar pencarian slug akurat sesuai bahasa
  const item = await getNewsletterDetail(slug, locale);

  if (!item) {
    notFound();
  }

  // Ambil 2 edisi newsletter terbaru lainnya secara dinamis (kecuali edisi aktif)
  const latestRes = await getLatestNewslettersExcept(item.id, 2);
  let recommendedNewsletters: any[] = [];

  const baseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";

  if (latestRes && latestRes.items) {
    // 💡 SOLUSI UTAMA: Memberikan tipe data `: any` pada parameter recItem agar tidak dicekal TypeScript saat build
    recommendedNewsletters = latestRes.items.map((recItem: any) => ({
      ...recItem,
      cover_image: `${baseUrl}/api/files/${recItem.collectionId}/${recItem.id}/${recItem.cover_image}`,
    }));
  }

  // Transformasi bahasa konten dinamis utama
  const title = locale === "id" ? item.title_id : item.title_en;
  const content = locale === "id" ? item.content_id : item.content_en;
  
  const heroImageUrl = `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.hero_image}`;
  const coverImageUrl = `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.cover_image}`;
  
  const pdfFileEnUrl = item.pdf_file_en ? `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf_file_en}` : "";
  const pdfFileIdUrl = item.pdf_file_id ? `${baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf_file_id}` : "";

  const preparedContentData = {
    id: item.id,
    cover_image: coverImageUrl,
    authors: item.authors,
    publish_date: item.publish_date,
    reading_time: item.reading_time,
    pdf_file_en: pdfFileEnUrl,
    pdf_file_id: pdfFileIdUrl,
    content: content,
  };

  return (
    <Layout selectedMenu="mores-research">
      {/* 1. SEKSI HERO BANNER */}
      <NewsletterDetailHero
        title={title}
        volume={item.volume}
        type={item.type}
        heroImage={heroImageUrl}
      />

      {/* 2. SEKSI INTI ARTIKEL & DOWNLOAD DROPDOWN */}
      <NewsletterDetailContent 
        item={preparedContentData} 
        locale={locale} 
      />

      {/* 3. SEKSI REKOMENDASI ARTIKEL BERIKUTNYA */}
      <NewsletterDetailLatest 
        newsletters={recommendedNewsletters}
        btnReadText={locale === "id" ? "BACA" : "READ"}
      />

      {/* 4. SEKSI BANTUAN REUSABLE */}
      <SectionHelp
        title="HAVE QUESTIONS OR NEED ASSISTANCE?"
        button_text="CONTACT US"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";