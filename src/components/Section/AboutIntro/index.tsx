import { PageHeader } from "@/components/PageHeader";
import { SectionInfo } from "@/components/SectionInfo";
import { HeadingText } from "@/components/Text";
import { useTranslations, useLocale } from "next-intl";

const AboutIntro = () => {
  const t = useTranslations("About");

  return (
    <>
      <section className="relative">
        <PageHeader
          background="/images/bg/bg-about.jpg"
          title="ABOUT MORES"
          overlay={true}
        />
      </section>
      <section className="py-[3.125rem] md:pt-[6.688rem] px-16 md:pb-[6.25rem]">
        <div className=""></div>
        <div className="max-w-[1080px] mx-auto">
          <SectionInfo
            title="MORES /ʼMÔRĀZʼ/"
            subtitle={<span className="font-medium">{t("about_quote")}</span>}
          >
            <div className="text-14 leading-[1.5rem] mt-24 md:mt-0">
              <p className="font-semibold">{t("about_desc_1")}</p>
              <br />
              <p className="">{t("about_desc_2")}</p>
            </div>
          </SectionInfo>
        </div>
        <div className="mt-[3.125rem] md:mt-[6.25rem] w-full max-w-[846px] mx-auto">
          <HeadingText
            type="h4"
            className="text-blue-pacific uppercase text-center"
          >
            {t("about_quote_2")}
          </HeadingText>
        </div>
      </section>
    </>
  );
};

export default AboutIntro;
