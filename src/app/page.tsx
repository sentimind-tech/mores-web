import Layout from "@/components/Layout";
import HomeBanner from "@/components/Section/HomeBanner";
import HomeHighlight from "@/components/Section/HomeHighlight";
import HomeHelp from "@/components/Section/SectionHelp";
import HomeServices from "@/components/Section/HomeServices";
import HomeInsight from "@/components/Section/HomeInsight";
import { getInsightForHome } from "@/services/insight";
import { getServiceList } from "@/services/service";

export default async function Homepage() {
  const insightData = await getInsightForHome();
  const servicesData = await getServiceList();

  return (
    <Layout>
      <HomeBanner />
      <HomeHighlight />
      <HomeServices list={servicesData} />
      <HomeInsight list={insightData} />
      <HomeHelp />
    </Layout>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
