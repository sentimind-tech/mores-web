"use client";

import BannerTech from "@/components/Section/BannerTech";
import { HeadingText, BodyText, DisplayText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useParams } from "next/navigation";

type TTechServiceDeetailContentProps = {
  title: string;
  image: string;
  slug: string;
  banner_title: string;
  banner_subtitle: string;
  banner_image: string;
};

const TechServiceDeetailContent = (props: TTechServiceDeetailContentProps) => {
  const { banner_title, banner_subtitle, banner_image } = props;
  const localActive = useLocale();
  const t = useTranslations("TechMores");
  const params = useParams();
  console.log(params);
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
            className="text-white uppercase !text-[1.5rem] md:!text-[2.5rem] !leading-[2rem] md:!leading-[3rem]"
          >
            {t(banner_title)}
          </DisplayText>
        </div>
      </BannerTech>
    </>
  );
};

export default TechServiceDeetailContent;
