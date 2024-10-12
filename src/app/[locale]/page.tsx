import Layout from "@/components/Layout";
import HomeBanner from "@/components/Section/HomeBanner";
import HomeHighlight from "@/components/Section/HomeHighlight";
import SectionHelp from "@/components/Section/SectionHelp";
import HomeServices from "@/components/Section/HomeServices";
import HomeInsight from "@/components/Section/HomeInsight";
import { getInsightForHome } from "@/services/insight";
import { getServiceList } from "@/services/service";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { locale: string };
};

export default async function Homepage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const insightData = await getInsightForHome(1, 3);
  const firstInsightData = await getInsightForHome(1, 1);
  const servicesData = await getServiceList();

  return (
    <Layout>
      <HomeBanner />
      <HomeHighlight data={firstInsightData} />
      <HomeServices list={servicesData} />
      <HomeInsight list={insightData} />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link=""
      />
    </Layout>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mores Strategics | Homepage",
  };
}
