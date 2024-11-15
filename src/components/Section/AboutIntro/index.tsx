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
          background="/images/bg/bg-header-page-about.jpg"
          title="ABOUT MORES"
          overlay={true}
        />
      </section>
      <section className="py-[3.125rem] md:pt-[6.688rem] px-16 md:pb-[6.25rem]">
        <div className="max-w-[1040px] mx-auto">
          <div className="grid grid-cols-1 mobile-min:grid-cols-3 gap-12 mobile-min:gap-[127px]">
            <div className="block">
              <h2 className="font-supplymono text-lg lg:text-28 lg:leading-10 font-normal text-blue-pacific">
                MORES /ʼMÔRĀZʼ/
              </h2>
              <div className="text-14 leading-[1.5rem] text-ironside mt-12">
                <span className="font-semibold">{t("about_quote")}</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="text-16 leading-[1.5rem] mt-24 md:mt-0">
                <p className="font-semibold">{t("about_desc_1")}</p>
                <br />
                <p className="">{t("about_desc_2")}</p>
              </div>
            </div>
          </div>
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
