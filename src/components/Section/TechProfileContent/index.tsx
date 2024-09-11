"use client";

import { useState, useRef, useEffect } from "react";
import { HeadingText, BodyText, DisplayText } from "@/components/Text";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./techProfile.css";
import withDimension, { TWithDimensionProps } from "@/utils/withDimension";
import { useTranslations, useLocale } from "next-intl";
import BannerTech from "@/components/Section/BannerTech";
import { ButtonPrimary } from "@/components/Button";

const dataClient = [
  {
    image: "/images/logo/logo-pustekhankam.png",
  },
  {
    image: "/images/logo/logo-terma.png",
  },
  {
    image: "/images/logo/logo-anomali.png",
  },
  {
    image: "/images/logo/logo-braga-tech.png",
  },
];

const TechProfileContent = (props: TWithDimensionProps) => {
  const { windowDimension } = props;
  const t = useTranslations("TechMores");
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [windowWidth, setWindowWidth] = useState(windowDimension.width);
  const [contentReady, setContentReady] = useState(false);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 3000,
    autoplay: true,
    fade: false,
    cssEase: "ease",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: "client-slider",
    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const dataEcosystem = [
    {
      image: "/images/thumb/thumb-tech-profile-ecosystem-1.jpg",
      title: t("ecosystem_image_desc_1"),
    },
    {
      image: "/images/thumb/thumb-tech-profile-ecosystem-2.jpg",
      title: t("ecosystem_image_desc_2"),
    },
    {
      image: "/images/thumb/thumb-tech-profile-ecosystem-3.jpg",
      title: t("ecosystem_image_desc_3"),
    },
  ];

  return (
    <>
      <BannerTech background="/images/bg-tech-profile.jpg" overlay={false}>
        <div className="lg:w-2/3">
          <HeadingText
            type="h5"
            className="mb-6 md:mb-16 text-blue-pacific uppercase"
          >
            {t("profile_banner_title")}
          </HeadingText>
          <DisplayText
            type="medium"
            className="text-white uppercase text-32 md:text-[3.25rem] leading-[2.40rem] md:leading-[3.75rem]"
          >
            {t("profile_banner_desc")}
          </DisplayText>
          <ButtonPrimary size="small" className="mt-24 md:mt-[2.313rem]">
            {t("profile_banner_button")}
          </ButtonPrimary>
        </div>
      </BannerTech>

      <section className="py-[3.125rem] md:py-[6.25rem]">
        <div className="w-full max-w-[1040px] mx-auto">
          <div className="flex flex-col gap-[4.375rem] md:gap-[6.25rem]">
            <div className="block px-16">
              <div className="flex items-center justify-between gap-12 md:gap-32 pb-20">
                <HeadingText
                  type="h3"
                  className="uppercase text-blue-pacific block w-1/2"
                >
                  {t("ecosystem_title_1")}
                </HeadingText>

                <div className="w-[124px] md:w-[177px] aspect-[16/7] relative shrink-0">
                  <Image
                    src="/images/logo/logo-itb.png"
                    alt="Logo ITB"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0 mix-blend-difference"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[3.125rem] text-black mt-12">
                <div className="relative border-t border-gray-silver first:border-0 md:first:border-t py-32 md:py-20 first:pt-0 md:first:pt-20 last:pb-0 md:last:pb-20">
                  <BodyText type="body2" className="">
                    {t("ecosystem_text_desc_1")}
                  </BodyText>
                </div>
                <div className="relative border-t border-gray-silver first:border-0 md:first:border-t py-32 md:py-20 first:pt-0 md:first:pt-20 last:pb-0 md:last:pb-20">
                  <BodyText type="body2" className="">
                    {t("ecosystem_text_desc_2")}
                  </BodyText>
                </div>
                <div className="relative border-t border-gray-silver first:border-0 md:first:border-t py-32 md:py-20 first:pt-0 md:first:pt-20 last:pb-0 md:last:pb-20">
                  <BodyText type="body2" className="">
                    {t("ecosystem_text_desc_3")}
                  </BodyText>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-hidden">
              <div className="px-16">
                <div className="text-center block relative">
                  <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
                  <HeadingText
                    type="h4"
                    className="bg-white text-black uppercase relative z-[1] inline-block px-16 md:px-[2.375rem]"
                  >
                    {t.rich("ecosystem_title_2", {
                      br: () => <br />,
                    })}
                  </HeadingText>
                </div>
              </div>
              <div className="mt-24 md:mt-[3.25rem] px-0 md:px-16">
                <div className="flex gap-16 md:gap-32 lg:gap-[3.063rem] overflow-auto px-16 md:px-0 pb-[10px] mb-[-10px]">
                  {dataEcosystem.map((item, index) => (
                    <div
                      className="block w-1/3 aspect-square bg-blue-pacific pt-[5px] min-w-[260px] md:min-w-fit"
                      key={index}
                    >
                      <div className="w-full h-full relative">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt="Thumb 1"
                            fill={true}
                            priority={true}
                            sizes="auto"
                            className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                          />
                        )}

                        <HeadingText
                          type="h2"
                          className="text-white absolute top-8 md:top-16 right-10 md:right-16"
                        >
                          {(index + 1).toString().padStart(2, "0")}
                        </HeadingText>

                        <div className="absolute bottom-0 left-0 p-12 md:p-16 lg:p-24">
                          <HeadingText className="text-white text-[0.75rem] md:text-14 leading-[1rem] md:leading-[1.15rem] lg:leading-[1.25rem] uppercase text-pretty">
                            {item.title}
                          </HeadingText>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="block">
              <div className="px-16">
                <div className="text-center block relative">
                  <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
                  <HeadingText
                    type="h4"
                    className="bg-white text-black uppercase relative z-[1] inline-block px-[2.375rem]"
                  >
                    {t("client_title")}
                  </HeadingText>
                </div>
              </div>

              <div className="block">
                <Slider {...settings} ref={sliderRef}>
                  {dataClient.map((item, index) => (
                    <div className="block aspect-square px-12" key={index}>
                      <div className="w-full h-full relative">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt="Thumb 1"
                            fill={true}
                            priority={true}
                            sizes="auto"
                            className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withDimension(TechProfileContent);
