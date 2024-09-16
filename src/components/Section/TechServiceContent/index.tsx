"use client";

import BannerTech from "@/components/Section/BannerTech";
import { useTranslations, useLocale } from "next-intl";
import { HeadingText, BodyText, DisplayText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import Link from "next/link";
import CardTechServiceItem from "@/components/Cards/CardTechServiceItem";

import dataServices from "@/data/techService.json";

const TechServiceContent = () => {
  const localActive = useLocale();
  const t = useTranslations("TechMores");

  return (
    <>
      <BannerTech background="/images/bg-tech-services.jpg" overlay={false}>
        <div className="lg:w-full">
          <HeadingText
            type="h5"
            className="mb-6 md:mb-16 text-blue-pacific uppercase"
          >
            {t("service_banner_desc")}
          </HeadingText>
          <DisplayText
            type="medium"
            className="text-white uppercase !text-[1.5rem] md:!text-[2.5rem] !leading-[2rem] md:!leading-[3rem]"
          >
            {t("service_banner_title")}
          </DisplayText>
          <Link href={`/${localActive}/contact`}>
            <ButtonPrimary size="small" className="mt-24 md:mt-[2.313rem]">
              {t("service_banner_button")}
            </ButtonPrimary>
          </Link>
        </div>
      </BannerTech>

      <section className="py-[3.125rem] md:py-[6.25rem] px-16">
        <div className="w-full max-w-[1038px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-16 md:gap-x-20 gap-y-20 md:gap-y-[2.125rem]">
            {dataServices.map((item, index) => (
              <div className="block" key={index}>
                <Link
                  href={`/${localActive}/tech/services/${item.slug}`}
                  className="block h-full w-full"
                >
                  <CardTechServiceItem image={item.image} title={item.title} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechServiceContent;
