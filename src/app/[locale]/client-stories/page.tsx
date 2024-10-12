import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import Layout from "@/components/Layout";
import SectionHelp from "@/components/Section/SectionHelp";
import SearchContent from "@/components/SearchContent";
import ClientStoriesContent from "@/components/Section/ClientStoriesContent";

type Props = {
  params: { locale: string };
};

export default async function ClientStoriesPage({ params: { locale } }: Props) {
  return (
    <Layout>
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
