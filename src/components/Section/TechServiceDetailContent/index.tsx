"use client";

import BannerTech from "@/components/Section/BannerTech";
import { HeadingText, BodyText, DisplayText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import {
  TECH_SERVICE_SLUG_CONTROL,
  TECH_SERVICE_SLUG_DATA,
  TECH_SERVICE_SLUG_SECURITY,
  TECH_SERVICE_SLUG_UAS,
  TECH_SERVICE_SLUG_AFC,
} from "@/store/constants";
import TechServiceSubControl from "../TechServiceSubControl";
import TechServiceDataAnalysis from "../TechServiceDataAnalysis";
import TechServiceDataIlustration from "../TechServiceDataIlustration";
import TechServiceDataPackageList from "../TechServiceDataPackageList";
import TechServiceSecurityIntro from "../TechServiceSecurityIntro";
import TechServiceUASDrone from "../TechServiceUASDrone";
import TechServiceUASDroneTech from "../TechServiceUASDroneTech";
import TechServiceAFCList from "../TechServiceAFCList";

type TTechServiceDetailContentProps = {
  title: string;
  image: string;
  slug: string;
  banner_title: string;
  banner_subtitle: string;
  banner_image: string;
};

const TechServiceDetailContent = (props: TTechServiceDetailContentProps) => {
  const { banner_title, banner_subtitle, banner_image } = props;
  const localActive = useLocale();
  const t = useTranslations("TechMores");
  const params = useParams();

  return (
    <>
      <BannerTech background={banner_image} overlay={false}>
        <div className="lg:w-full">
          <HeadingText
            type="h5"
            className="mb-6 md:mb-16 text-blue-pacific uppercase"
          >
            {t(banner_subtitle)}
          </HeadingText>
          <DisplayText
            type="medium"
            className="text-white uppercase !text-[1.25rem] md:!text-[2rem] lg:!text-[2.5rem] !leading-[1.7rem] md:!leading-[2.5rem] lg:!leading-[3rem]"
          >
            {t(banner_title)}
          </DisplayText>
        </div>
      </BannerTech>

      {params.slug == TECH_SERVICE_SLUG_CONTROL && <TechServiceSubControl />}
      {params.slug == TECH_SERVICE_SLUG_DATA && (
        <section className="py-[3.125rem] md:py-[6.25rem]">
          <TechServiceDataAnalysis />
          <TechServiceDataIlustration />
          <TechServiceDataPackageList />
        </section>
      )}
      {params.slug == TECH_SERVICE_SLUG_SECURITY && (
        <TechServiceSecurityIntro />
      )}
      {params.slug == TECH_SERVICE_SLUG_UAS && (
        <>
          <TechServiceUASDrone />
          <TechServiceUASDroneTech />
        </>
      )}
      {params.slug == TECH_SERVICE_SLUG_AFC && <TechServiceAFCList />}
    </>
  );
};

export default TechServiceDetailContent;
