"use client";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { BodyText, HeadingText, DisplayText } from "@/components/Text";
import { ButtonPrimary, ButtonOutline } from "@/components/Button";
import Link from "next/link";
import "./heroBannerStyle.css";
import { TInsightPagination } from "@/types/insight";
import { imagePath } from "@/module/helper";
import { useLocale } from "next-intl";
import { TValue } from "@/types/app_config";
import { TFooterBannerPagination } from "@/types/footer_banner";

type THomeBannerProps = {
  bannerList: TInsightPagination | null;
  showFooterBanner?: boolean | TValue;
  footerBannerList?: TFooterBannerPagination | null;
};

const HomeBanner = (props: THomeBannerProps) => {
  const { bannerList, showFooterBanner, footerBannerList } = props;
  const [imageIndex, setImageIndex] = useState(0);
  const [contentReady, setContentReady] = useState(false);
  const sliderRef = useRef<Slider | null>(null);
  const localActive = useLocale();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: "hero-carousel",
    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
        },
      },
    ],
  };

  const goToSlide = (e: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(e);
    }
  };
  return (
    <section className="block relative">
      <div className="w-full relative overflow-hidden h-[500px] lg:h-[calc(100vh_-_163px)] bg-gray-100">
        {bannerList !== null && (
          <Slider {...settings} ref={sliderRef}>
            {bannerList.items.map((item, index) => {
              let imageThumb = imagePath(item.id, item.cover_image, "insights");

              return (
                <div
                  className={`w-full h-[500px] lg:h-[calc(100vh_-_163px)] relative group px-16 ${
                    index === imageIndex ? "slide active-slide" : "slide"
                  }`}
                  key={index}
                >
                  {imageThumb && (
                    <>
                      <Image
                        src={imageThumb}
                        alt="Main Logo"
                        fill={true}
                        priority={true}
                        sizes="auto"
                        className="banner-image block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                      />

                      <div className="w-full h-full absolute bg-hero-banner-overlay z-[1] top-0 left-0" />
                    </>
                  )}
                  <div className="w-full max-w-[1130px] mx-auto h-full flex flex-col items-start justify-center relative z-[2]">
                    <div className="block text-white w-full md:w-2/3">
                      <DisplayText
                        type="medium"
                        className="uppercase !text-32 md:!text-[2.5rem] lg:!text-[3.25rem] !leading-[2.375rem] md:!leading-[3.125rem] lg:!leading-[3.75rem] block mb-12 opacity-0 translate-y-[1.875rem] group-[.active-slide]:transition-all group-[.active-slide]:duration-1000 group-[.active-slide]:delay-100 group-[.active-slide]:opacity-100 group-[.active-slide]:translate-y-0"
                      >
                        {item.title}
                      </DisplayText>
                      <BodyText
                        type="body2"
                        className="!text-10 md:!text-14 leading-[1rem] block mb-[1.375rem] opacity-0 translate-y-[1.875rem] group-[.active-slide]:transition-all group-[.active-slide]:duration-1000 group-[.active-slide]:delay-200 group-[.active-slide]:opacity-100 group-[.active-slide]:translate-y-0"
                      >
                        {item.description}
                      </BodyText>
                      <Link
                        href={`/${localActive}/insights/${item.id}`}
                        className="inline-block opacity-0 translate-x-[-1.875rem] group-[.active-slide]:transition-all group-[.active-slide]:duration-1000 group-[.active-slide]:delay-[600ms] group-[.active-slide]:opacity-100 group-[.active-slide]:translate-x-0"
                      >
                        <ButtonPrimary
                          className="uppercase hidden md:block"
                          size="small"
                        >
                          READ NOW
                        </ButtonPrimary>

                        <ButtonOutline
                          size="small"
                          className="flex md:hidden items-center gap-[10px]"
                        >
                          <span>READ NOW</span>

                          <svg
                            width="21"
                            height="15"
                            viewBox="0 0 21 15"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20.6558 7.0082L13.8477 14.0164L12.7404 12.8784L17.6623 7.813L2.4454e-05 7.813L2.45244e-05 6.2034L17.6623 6.2034L12.7404 1.1396L13.8477 -2.97591e-07L20.6558 7.0082Z"
                              fill="white"
                            />
                          </svg>
                        </ButtonOutline>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>

      {showFooterBanner && (
        <div className="bg-black hidden md:block h-[80px]">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="grid grid-cols-4">
              {footerBannerList?.items.map((item, index) => (
                <div
                  className="px-8 h-[80px] flex items-center justify-center"
                  key={index}
                >
                  <Link href={item.link_url} className="block relative group">
                    <svg
                      width="15"
                      height="10"
                      viewBox="0 0 15 10"
                      fill="none"
                      className={`absolute top-[7px] left-[-18px] transition-all duration-300 opacity-0 translate-x-[-0.938rem] group-hover:translate-x-0 group-hover:opacity-100`}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2798 4.75L9.6618 9.5L8.9107 8.7287L12.2493 5.29547L0.268828 5.29547L0.268828 4.20452L12.2493 4.20452L8.9107 0.772393L9.6618 -2.01701e-07L14.2798 4.75Z"
                        className="fill-blue-pacific"
                      />
                    </svg>
                    <HeadingText
                      type="h6"
                      className="uppercase text-white leading-[1.25rem] transition-all duration-300 group-hover:text-blue-pacific"
                    >
                      {item.title}
                    </HeadingText>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeBanner;
