import Layout from "@/components/Layout";
import TechServiceContent from "@/components/Section/TechServiceContent";
import SectionHelp from "@/components/Section/SectionHelp";
import { unstable_setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { SELECTED_MENU_TECH } from "@/store/constants";
import { getMoresTechService } from "@/services/mores_tech";

type Props = {
  params: { locale: string };
};

const TechServices = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  const services = await getMoresTechService();

  return (
    <Layout selectedMenu={SELECTED_MENU_TECH}>
      <TechServiceContent list={services} />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
};

export default TechServices;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mores | Tech Service",
  };
}
