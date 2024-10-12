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

const heroData = [
  {
    title: "SEE THINGS THROUGH LOCAL’S EYES",
    desc: "DISCOVER THE RICHNESS OF DIVERSITY AND CULTURE BY VIEWING THE WORLD THROUGH THE LENS OF A LOCAL'S PERSPECTIVE.",
    url: "",
    nav_title: "MORES SPOTLIGHT",
    image: "https://picsum.photos/id/1/2556/1556",
  },
  {
    title: "SEE THINGS THROUGH LOCAL’S EYES",
    desc: "DISCOVER THE RICHNESS OF DIVERSITY AND CULTURE BY VIEWING THE WORLD THROUGH THE LENS OF A LOCAL'S PERSPECTIVE.",
    url: "",
    nav_title: "MORES BLOG",
    image: "https://picsum.photos/id/26/2556/1556",
  },
  {
    title: "SEE THINGS THROUGH LOCAL’S EYES",
    desc: "DISCOVER THE RICHNESS OF DIVERSITY AND CULTURE BY VIEWING THE WORLD THROUGH THE LENS OF A LOCAL'S PERSPECTIVE.",
    url: "",
    nav_title: "MORES ARTICLE",
    image: "https://picsum.photos/id/24/2556/1556",
  },
  {
    title: "SEE THINGS THROUGH LOCAL’S EYES",
    desc: "DISCOVER THE RICHNESS OF DIVERSITY AND CULTURE BY VIEWING THE WORLD THROUGH THE LENS OF A LOCAL'S PERSPECTIVE.",
    url: "",
    nav_title: "MORES REPORT",
    image: "https://picsum.photos/id/20/2556/1556",
  },
];

const HomeBanner = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [contentReady, setContentReady] = useState(false);
  const sliderRef = useRef<Slider | null>(null);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
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
      <div className="w-full relative overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {heroData.map((item, index) => (
            <div
              className={`w-full h-[500px] lg:h-[615px] relative group px-16 ${
                index === imageIndex ? "slide active-slide" : "slide"
              }`}
              key={index}
            >
              {item.image && (
                <>
                  <Image
                    src={item.image}
                    alt="Main Logo"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />

                  <div className="w-full h-full absolute bg-hero-banner-overlay z-[1] top-0 left-0" />
                </>
              )}
              <div className="w-full max-w-[1130px] mx-auto h-full flex flex-col items-start justify-center relative z-[2]">
                <div className="block text-white w-2/3">
                  <DisplayText
                    type="medium"
                    className="!text-32 md:!text-[2.5rem] lg:!text-[3.25rem] !leading-[2.375rem] md:!leading-[3.125rem] lg:!leading-[3.75rem] block mb-12 opacity-0 translate-y-[1.875rem] group-[.active-slide]:transition-all group-[.active-slide]:duration-1000 group-[.active-slide]:delay-100 group-[.active-slide]:opacity-100 group-[.active-slide]:translate-y-0"
                  >
                    SEE THINGS THROUGH LOCAL’S EYES
                  </DisplayText>
                  <BodyText
                    type="body2"
                    className="capitalize !text-10 md:!text-14 leading-[1rem] block mb-[1.375rem] opacity-0 translate-y-[1.875rem] group-[.active-slide]:transition-all group-[.active-slide]:duration-1000 group-[.active-slide]:delay-200 group-[.active-slide]:opacity-100 group-[.active-slide]:translate-y-0"
                  >
                    DISCOVER THE RICHNESS OF DIVERSITY AND CULTURE BY VIEWING
                    THE WORLD THROUGH THE LENS OF A LOCAL&lsquo;S PERSPECTIVE.
                  </BodyText>
                  <Link
                    href=""
                    className="inline-block opacity-0 translate-y-[1.875rem] group-[.active-slide]:transition-all group-[.active-slide]:duration-1000 group-[.active-slide]:delay-[280ms] group-[.active-slide]:opacity-100 group-[.active-slide]:translate-y-0"
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
          ))}
        </Slider>
      </div>
      <div className="bg-black hidden md:block">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-4">
            {heroData.map((item, index) => (
              <div
                className="px-8 h-[80px] flex items-center justify-center"
                key={index}
              >
                <div
                  className={`block relative ${
                    index === imageIndex
                      ? "cursor-default pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                    className={`absolute top-[7px] left-[-18px] transition-all duration-1000 ${
                      index === imageIndex
                        ? "opacity-0 translate-x-[-0.938rem]"
                        : "translate-x-0 opacity-100"
                    }`}
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
                    className="uppercase text-white leading-[1.25rem]"
                  >
                    {item.nav_title}
                  </HeadingText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
