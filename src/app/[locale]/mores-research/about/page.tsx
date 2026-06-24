import React from "react";
import { Metadata } from "next";
import Layout from "@/components/Layout";
import SectionHelp from "@/components/Section/SectionHelp";
import { ResearchHero } from "@/components/Section/ResearchPage/ResearchHero";
import { ResearchSubNav } from "@/components/Section/ResearchPage/ResearchSubNav";
import { ResearchOverview } from "@/components/Section/ResearchPage/ResearchOverview";
import { ResearchFellowship } from "@/components/Section/ResearchPage/ResearchFellowship";
import { ResearchPriorityAreas } from "@/components/Section/ResearchPage/ResearchPriorityAreas";
import { ResearchApproachResult } from "@/components/Section/ResearchPage/ResearchApproachResult";
import { SELECTED_MENU_RESEARCH } from "@/store/constants";
import { ResearchNewsletter } from "@/components/Section/ResearchPage/ResearchNewsletter";

type Props = {
  params: {
    locale: string;
  };
};

export default async function AboutMoresResearch({ params: { locale } }: Props) {
  return (
    <Layout selectedMenu={SELECTED_MENU_RESEARCH}>
      <ResearchHero />
      <ResearchSubNav />

      {/* 💡 PERBAIKAN: Menggunakan md:px-0 agar padding global dinonaktifkan di desktop */}
      <main className="w-full bg-white flex flex-col section-padding-x md:px-0">
        {/* 1. SEKSI OVERVIEW */}
        <div className="py-16 bg-white">
          <ResearchOverview />
        </div>
        
        {/* 4. SEKSI FELLOWSHIP PROGRAM */}
        <div className="py-16 bg-white">
          <ResearchFellowship />
        </div>

        {/* 2. SEKSI PRIORITY AREAS */}
        <div className="py-16 bg-white">
          <ResearchPriorityAreas />
        </div>

        {/* 3. SEKSI APPROACH AND RESULT */}
        <div className="py-16 bg-white">
          <ResearchApproachResult />
        </div>

        {/* 5. SEKSI NEWSLETTER */}
        <div className="py-16 bg-white">
          <ResearchNewsletter />
        </div>
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
  title: "Mores | About Mores Research",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";