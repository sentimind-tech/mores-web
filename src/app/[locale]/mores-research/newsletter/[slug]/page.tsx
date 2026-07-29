import React from "react";
import { notFound, redirect } from "next/navigation"; // 💡 TAMBAHKAN IMPORT redirect
import { Metadata } from "next";
import Layout from "@/components/Layout";
import SectionHelp from "@/components/Section/SectionHelp";
import { getNewsletterDetail, getLatestNewslettersExcept } from "@/services/newsletter";
import { NewsletterDetailHero } from "@/components/Section/MoresightDetailPage/NewsletterDetailHero";
import { NewsletterDetailContent } from "@/components/Section/MoresightDetailPage/NewsletterDetailContent";
import { NewsletterDetailLatest } from "@/components/Section/MoresightDetailPage/NewsletterDetailLatest";

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

// 💡 METADATA DINAMIS: Mendukung pencarian fallback agar tab browser tidak patah saat ganti bahasa
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  // Coba cari normal dulu
  let item = await getNewsletterDetail(slug, locale);
  
  // Jika gagal, coba cari menggunakan bahasa kebalikannya (antisipasi mismatch slug)
  if (!item) {
    const fallbackLocale = locale === "id" ? "en" : "id";
    item = await getNewsletterDetail(slug, fallbackLocale);
  }

  if (!item) return { title: "Mores" };
  const title = locale === "id" ? item.title_id : item.title_en;
  return {
    title: `Mores | ${title}`,
  };
}

export default async function NewsletterDetailPage({ params }: Props) {
  const { locale, slug } = await params;

  // 1. Coba ambil data newsletter berdasarkan locale aktif saat ini
  let item = await getNewsletterDetail(slug, locale);

  // 🔄 2. JIKA REDIRECT/SWITCH BAHASA TERJADI (item tidak ditemukan dengan slug + locale aktif)
  if (!item) {
    const fallbackLocale = locale === "id" ? "en" : "id";
    item = await getNewsletterDetail(slug, fallbackLocale);

    // Jika di bahasa kebalikannya ketemu, berarti ini korban salah alamat akibat LangSelector
    if (item) {
      const correctSlug = locale === "id" ? item.slug_id : item.slug_en;
      // Tendang langsung browser ke URL dengan slug yang diterjemahkan dengan benar
      redirect(`/${locale}/mores-research/newsletter/${correctSlug}`);
    } else {
      // Jika di kedua bahasa tetap tidak ada, barulah lempar ke 404 asli
      notFound();
    }
  }

  // Ambil 2 edisi newsletter terbaru lainnya secara dinamis (kecuali edisi aktif)
  const latestRes = await getLatestNewslettersExcept(item.id, 2);
  let recommendedNewsletters: any[] = [];

  const baseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";

  if (latestRes && latestRes.items) {
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
        issue={item.issue} // 💡 PERBAIKAN: Menambahkan operan data item.issue ke komponen Hero
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