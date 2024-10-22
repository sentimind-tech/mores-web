import Layout from "@/components/Layout";
import TechProfileContent from "@/components/Section/TechProfileContent";
import SectionHelp from "@/components/Section/SectionHelp";
import type { Metadata } from "next";
import { SELECTED_MENU_TECH } from "@/store/constants";

type Props = {
  params: { locale: string };
};

const TechProfile = async ({ params: { locale } }: Props) => {
  return (
    <Layout selectedMenu={SELECTED_MENU_TECH}>
      <TechProfileContent />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
};

export default TechProfile;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mores | Tech Profile",
  };
}
