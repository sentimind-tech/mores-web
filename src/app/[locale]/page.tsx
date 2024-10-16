import Layout from "@/components/Layout";
import HomeBanner from "@/components/Section/HomeBanner";
import HomeHighlight from "@/components/Section/HomeHighlight";
import SectionHelp from "@/components/Section/SectionHelp";
import HomeServices from "@/components/Section/HomeServices";
import HomeInsight from "@/components/Section/HomeInsight";
import {
  getInsightForHome,
  getInsightList,
  TInsightParams,
} from "@/services/insight";
import { getServiceList } from "@/services/service";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";
import { getConfigByKey } from "@/services/app_configs";
import { CONFIG_SHOW_FOOTER_BANNER } from "@/store/constants";
import { getFooterBannerHome } from "@/services/footer_banner";

type Props = {
  params: { locale: string };
};

export default async function Homepage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const query: TInsightParams = {
    isFeaturedHome: true,
  };

  const insightData = await getInsightForHome(1, 3);
  const firstInsightData = await getInsightForHome(1, 1);
  const servicesData = await getServiceList();
  const insightBannerData = await getInsightForHome(1, 4);
  const showFooterBannerConfig = await getConfigByKey(
    CONFIG_SHOW_FOOTER_BANNER
  );
  const footerBannerList = await getFooterBannerHome(1, 4);

  return (
    <Layout>
      <HomeBanner
        bannerList={insightBannerData}
        showFooterBanner={showFooterBannerConfig?.value}
        footerBannerList={footerBannerList}
      />
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
