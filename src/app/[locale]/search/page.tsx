import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import Layout from "@/components/Layout";
import SectionHelp from "@/components/Section/SectionHelp";
import SearchContent from "@/components/SearchContent";
import { SELECTED_MENU_HOME } from "@/store/constants";

type Props = {
  params: { locale: string };
};

export default async function SearchPage({ params: { locale } }: Props) {
  return (
    <Layout selectedMenu={SELECTED_MENU_HOME}>
      <SearchContent />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link=""
      />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Mores | Search",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
