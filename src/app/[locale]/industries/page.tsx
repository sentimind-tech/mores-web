import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionInfo } from "@/components/SectionInfo";
import { TIndustry } from "@/types/industry";
import { getIndustryList } from "@/services/industry";
import Layout from "@/components/Layout";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import IndustryList from "@/components/Section/IndustryPage/IndustryList";
import SectionHelp from "@/components/Section/SectionHelp";
import { SELECTED_MENU_INDUSTRY } from "@/store/constants";
import { TInsightParams, getInsightList } from "@/services/insight";
import { InsightCard } from "@/components/InsightCard";
import { customConfig } from "../../../../config";
import HeaderContent from "@/components/Section/IndustryPage/HeaderContent";

type Props = {
  params: { locale: string };
};

export default async function Industry({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const industryList = await getIndustryList();

  const params: TInsightParams = {
    hasIndustry: true,
  };
  const insightList = await getInsightList(params, 1, 4);
  const insights = insightList?.items;
  return (
    <Layout selectedMenu={SELECTED_MENU_INDUSTRY}>
      <section>
        <PageHeader background="/images/bg/bg-header-page-industries.jpg" />
      </section>
      <section className="flex flex-col section-padding flex flex-col gap-32 lg:gap-100">
        <HeaderContent />

        <IndustryList industryList={industryList || []} />
        {insights && insights.length > 0 && (
          <section className="section-header-container">
            <SectionHeader title="FEATURED INSIGHTS" />
            <div className="insight-container">
              {insights.map((insight) => {
                let subTitle = "";
                if (insight?.expand?.industry_tags) {
                  subTitle = insight.expand?.industry_tags?.[0]?.name;
                }
                return (
                  <InsightCard
                    key={insight.id}
                    image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                    title={insight.title}
                    description={insight.description}
                    subtitle={subTitle}
                    path={`/${locale}/insights/${insight.id}`}
                  />
                );
              })}
            </div>
          </section>
        )}
      </section>
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Mores | Industries",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
