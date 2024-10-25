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
  getInsightDetail,
} from "@/services/insight";
import { getServiceList } from "@/services/service";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";
import {
  getConfigByKey,
  getConfigHighlightInsight,
  getConfigFooterBannerHome,
} from "@/services/app_configs";
import { CONFIG_SHOW_FOOTER_BANNER } from "@/store/constants";
import { getFooterBannerHome } from "@/services/footer_banner";
import { SELECTED_MENU_HOME } from "@/store/constants";
import {
  CONFIG_INSIGHT_MAIN_HOMEPAGE,
  CONFIG_INSIGHT_LIST,
} from "@/store/constants";

type Props = {
  params: { locale: string };
};

export default async function Homepage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const servicesData = await getServiceList();
  const insightBannerData = await getInsightForHome(1, 4);
  const showFooterBannerConfig = await getConfigFooterBannerHome(
    CONFIG_SHOW_FOOTER_BANNER
  );
  const footerBannerList = await getFooterBannerHome(1, 4);
  const highlighttedId = await getConfigHighlightInsight(
    CONFIG_INSIGHT_MAIN_HOMEPAGE
  );
  const pinnedExploreInsight = await getConfigHighlightInsight(
    CONFIG_INSIGHT_LIST
  );

  return (
    <Layout selectedMenu={SELECTED_MENU_HOME}>
      <HomeBanner
        bannerList={insightBannerData}
        showFooterBanner={showFooterBannerConfig?.active}
        footerBannerList={footerBannerList}
      />
      <HomeHighlight id={highlighttedId?.insight} />
      <HomeServices list={servicesData} />
      <HomeInsight listId={pinnedExploreInsight?.insight} />
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
