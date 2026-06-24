import React, { Suspense } from "react";
import { Metadata } from "next";
import Layout from "@/components/Layout"; 
import SectionHelp from "@/components/Section/SectionHelp";

import { MoresightHero } from "@/components/Section/MoresightPage/MoresightHero";
import { MoresightSubNav } from "@/components/Section/MoresightPage/MoresightSubNav";
import { MoresightOverview } from "@/components/Section/MoresightPage/MoresightOverview";
import { MoresightFilter } from "@/components/Section/MoresightPage/MoresightFilter";
import { MoresightList } from "@/components/Section/MoresightPage/MoresightList";

type Props = {
  params: {
    locale: string;
  };
};

export default async function MoresightNewsletterPage({ params: { locale } }: Props) {
  return (
    <Layout selectedMenu="mores-research">
      <MoresightHero />
      <MoresightSubNav />
      
      {/* 💡 PERBAIKAN: Menambahkan section-padding-x untuk mobile, dan di-reset dengan md:px-0 untuk desktop */}
      <main className="w-full bg-white flex flex-col section-padding-x md:px-0">
        {/* 1. SEKSI OVERVIEW */}
        <div id="moresight-overview" className="py-16 bg-white scroll-mt-[100px]">
          <MoresightOverview />
        </div>

        {/* 2. SEKSI NEWSLETTER (FILTER & LIST) */}
        {/* 💡 Dibungkus dengan Suspense agar fungsionalitas search params berjalan aman tanpa memutus proses build Next.js */}
        <Suspense fallback={<div className="text-center py-12 font-sans text-gray-500">Loading newsletter feed...</div>}>
          <div id="newsletter" className="py-16 bg-white scroll-mt-[100px] flex flex-col">
            <MoresightFilter />
            <MoresightList /> 
          </div>
        </Suspense>
      </main>

      <SectionHelp
        title="HAVE QUESTIONS OR NEED ASSISTANCE?"
        button_text="CONTACT US"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Mores | Moresight (Newsletter)",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";