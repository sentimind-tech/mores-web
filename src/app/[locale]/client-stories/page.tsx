import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import Layout from "@/components/Layout";
import SectionHelp from "@/components/Section/SectionHelp";
import SearchContent from "@/components/SearchContent";
import ClientStoriesContent from "@/components/Section/ClientStoriesContent";
import { SELECTED_MENU_CLIENTSTORIES } from "@/store/constants";

type Props = {
  params: { locale: string };
};

export default async function ClientStoriesPage({ params: { locale } }: Props) {
  return (
    <Layout selectedMenu={SELECTED_MENU_CLIENTSTORIES}>
      <ClientStoriesContent />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Mores | Client Stories",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
