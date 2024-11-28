import React from "react";
import { Metadata } from "next";

import { ServiceValueCard } from "@/components/ServiceValueCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionInfo } from "@/components/SectionInfo";
import { SectionDetail } from "@/components/SectionDetail";
import { getServiceList } from "@/services/service";
import Layout from "@/components/Layout";
import { unstable_setRequestLocale } from "next-intl/server";
import HeaderContent from "@/components/Section/ServicePage/HeaderContent";
import ServiceValues from "@/components/Section/ServicePage/ServiceValues";
import SectionHelp from "@/components/Section/SectionHelp";
import { SELECTED_MENU_SERVICE } from "@/store/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { TInsightParams, getInsightList } from "@/services/insight";
import { InsightCard } from "@/components/InsightCard";
import { customConfig } from "../../../../config";
import { useLocale } from "next-intl";

type Props = {
  params: { locale: string };
};

export default async function Services({ params: { locale } }: Props) {
  const serviceList = await getServiceList();

  const params: TInsightParams = {
    hasService: true,
  };
  const insightList = await getInsightList(params, 1, 4);
  const insights = insightList?.items;

  unstable_setRequestLocale(locale);

  return (
    <Layout selectedMenu={SELECTED_MENU_SERVICE}>
      <section className="flex flex-col mb-[100px] gap-100">
        <section>
          <PageHeader
            background="/images/bg/bg-header-page-services.jpg"
            title="SERVICES"
          />
        </section>
        <section className="section-padding-x flex flex-col gap-32 lg:gap-100">
          <HeaderContent />
          <ServiceValues />
        </section>
        <SectionDetail services={serviceList || undefined} />

        {insights && insights.length > 0 && (
          <section className="section-padding-x section-header-container">
            <SectionHeader title="FEATURED INSIGHTS" />
            <div className="insight-container">
              {insights.map((insight) => {
                let subTitle = "";
                if (insight?.expand?.service_tags) {
                  subTitle = insight.expand?.service_tags?.[0]?.name;
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
  title: "Mores | Services",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
