import Layout from "@/components/Layout";
import HomeBanner from "@/components/Section/HomeBanner";
import HomeHighlight from "@/components/Section/HomeHighlight";
import HomeHelp from "@/components/Section/HomeHelp";

export default function Homepage() {
  return (
    <Layout>
      <HomeBanner />
      <HomeHighlight />
      <HomeHelp />
    </Layout>
  );
}
