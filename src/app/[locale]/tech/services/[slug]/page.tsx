import Layout from "@/components/Layout";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import SectionHelp from "@/components/Section/SectionHelp";
import TechServiceDetailContent from "@/components/Section/TechServiceDetailContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import dataServices from "@/data/techService.json";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

const TechServicesDetail = async ({ params: { locale, slug } }: Props) => {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("Common");

  const service = dataServices.find((item) => item.slug == slug);

  if (!service) notFound();

  return (
    <Layout>
      <TechServiceDetailContent {...service} />
      <SectionHelp
        title={t("contact_title")}
        button_text={t("contact_button")}
        link={`/${locale}/contact`}
      />
    </Layout>
  );
};

export default TechServicesDetail;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mores | Tech Service",
  };
}
