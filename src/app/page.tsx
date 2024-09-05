import Layout from "@/components/Layout";
import HomeBanner from "@/components/Section/HomeBanner";
import HomeHighlight from "@/components/Section/HomeHighlight";
import HomeHelp from "@/components/Section/HomeHelp";
import HomeServices from "@/components/Section/HomeServices";

export default function Homepage() {
  return (
    <Layout>
      <HomeBanner />
      <HomeHighlight />
      <HomeServices />
      <HomeHelp />
    </Layout>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
