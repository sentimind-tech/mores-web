import Layout from "@/components/Layout";
import TechServiceContent from "@/components/Section/TechServiceContent";
import SectionHelp from "@/components/Section/SectionHelp";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const TechServices = async ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return (
    <Layout>
      <TechServiceContent />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
};

export default TechServices;
