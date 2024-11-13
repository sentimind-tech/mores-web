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
import Link from "next/link";
import TechProfileCollapseContent from "../TechProfileCollapseContent";

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

const dataPartner = [
  {
    image: "/images/logo/logo-flazz.png",
  },
  {
    image: "/images/logo/logo-emoney.png",
  },
  {
    image: "/images/logo/logo-tapcash.png",
  },
  {
    image: "/images/logo/logo-brizzi.png",
  },
];

const TechProfileContent = (props: TWithDimensionProps) => {
  const { windowDimension } = props;
  const t = useTranslations("TechMores");
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [windowWidth, setWindowWidth] = useState(windowDimension.width);
  const [contentReady, setContentReady] = useState(false);
  const localActive = useLocale();

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
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
      image: "/images/thumb/thumb-profile-tech-ecosystem-1.jpg",
      title: t("ecosystem_image_title_1"),
      desc: t("ecosystem_image_desc_1"),
    },
    {
      image: "/images/thumb/thumb-profile-tech-ecosystem-2.jpg",
      title: t("ecosystem_image_title_2"),
      desc: t("ecosystem_image_desc_2"),
    },
    {
      image: "/images/thumb/thumb-profile-tech-ecosystem-3.jpg",
      title: t("ecosystem_image_title_3"),
      desc: t("ecosystem_image_desc_3"),
    },
  ];

  const dataProject = [
    {
      title: t("project_list_title_1"),
      desc: t("project_list_desc_1"),
    },
    {
      title: t("project_list_title_2"),
      desc: t("project_list_desc_2"),
    },
    {
      title: t("project_list_title_3"),
      desc: t("project_list_desc_3"),
    },
    {
      title: t("project_list_title_4"),
      desc: t("project_list_desc_4"),
    },
    {
      title: t("project_list_title_5"),
    },
    {
      title: t("project_list_title_6"),
      image: ["/images/logo/logo-mcash.png", "/images/logo/logo-diva.png"],
    },
  ];

  return (
    <>
      <BannerTech background="/images/bg-profile-tech.jpg" overlay={false}>
        <div className="lg:w-2/3">
          <HeadingText
            type="h5"
            className="mb-6 md:mb-16 text-blue-pacific uppercase"
          >
            {t("profile_banner_title")}
          </HeadingText>
          <DisplayText
            type="medium"
            className="text-white uppercase !text-[1.5rem] md:!text-[2.5rem] !leading-[2rem] md:!leading-[3rem]"
          >
            {t("profile_banner_desc")}
          </DisplayText>
          <Link href={`/${localActive}/contact`}>
            <ButtonPrimary size="small" className="mt-24 md:mt-[2.313rem]">
              {t("profile_banner_button")}
            </ButtonPrimary>
          </Link>
        </div>
      </BannerTech>

      <section className="py-[3.125rem] md:py-[6.25rem]">
        <div className="w-full max-w-[1072px] mx-auto">
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
                    <div className="block w-full md:w-1/3" key={index}>
                      <div className="aspect-square bg-blue-pacific pt-[5px] min-w-[260px] md:min-w-fit">
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

                      <BodyText type="body2" className="mt-18 text-black">
                        {item.desc}
                      </BodyText>
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
                    {t("project_title")}
                  </HeadingText>
                </div>
              </div>

              <div className="px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] md:gap-[2.5rem] lg:gap-[3.125rem] pt-[2.75rem]">
                  {dataProject.map((item, index) => (
                    <div
                      className="flex items-start gap-16 text-black pt-[2rem] md:py-[2.125rem] border-t border-gray-cloud"
                      key={index}
                    >
                      <div className="shrink-0">
                        <div className="w-[32px] h-[32px] flex items-center justify-center bg-blue-pacific rounded-full">
                          <span className="text-12 leading-[1.75rem] text-white">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 text-black">
                        <HeadingText type="h5" className="uppercase">
                          {item.title}
                        </HeadingText>

                        {item?.desc && (
                          <BodyText type="body2" className="mt-[2.438rem]">
                            {item.desc}
                          </BodyText>
                        )}

                        {item?.image && (
                          <div className="flex flex-col gap-32 mt-[2.438rem]">
                            {item.image.map((item, idx) => (
                              <div className="relative" key={idx}>
                                <img
                                  src={item}
                                  alt=""
                                  className={`block ${
                                    idx == 0 ? "max-w-[177px]" : "max-w-[120px]"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[2.5rem] mt-[3rem] md:mt-[6.25rem]">
                  <div className="block">
                    <div className="w-full aspect-[16/8] md:aspect-[16/14] flex items-center justify-center">
                      <svg
                        width="96"
                        height="97"
                        viewBox="0 0 96 97"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_3222_5605)">
                          <path
                            d="M91.5154 82.7847H4.48047V88.0865H91.5154V82.7847Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M95.3752 90.0054H0.621094V96.9998H95.3752V90.0054Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M95.3752 30.4814H0.621094V33.9774H95.3752V30.4814Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M32.9059 38.2139H15.1406V42.206H32.9059V38.2139Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M32.9059 75.3145H15.1406V79.3066H32.9059V75.3145Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M29.3436 38.8232H18.7012V78.8881H29.3436V38.8232Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M56.8805 38.2139H39.1152V42.206H56.8805V38.2139Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M56.8805 75.3145H39.1152V79.3066H56.8805V75.3145Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M53.9412 38.8232H43.2988V78.8881H53.9412V38.8232Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M80.8571 38.2139H63.0918V42.206H80.8571V38.2139Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M80.8571 75.3145H63.0918V79.3066H80.8571V75.3145Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M77.2948 38.8232H66.6523V78.8881H77.2948V38.8232Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M48 0L0 18.9809V27.081H48H96V18.9809L48 0Z"
                            fill="#00A2B6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3222_5605">
                            <rect width="96" height="97" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="py-[0.938rem] px-8 text-black">
                      <HeadingText type="h5" className="">
                        {t("project_feature_bank_integration")}
                      </HeadingText>
                      <ul className="list-disc pl-16 mt-12">
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_bank_integration_item_1")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_bank_integration_item_2")}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block">
                    <div className="w-full aspect-[16/8] md:aspect-[16/14] flex items-center justify-center">
                      <svg
                        width="52"
                        height="109"
                        viewBox="0 0 52 109"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_3222_5700)">
                          <path
                            d="M26 0H0L4.09461 84.8101H26H47.9054L52 0H26Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M6.62305 12.0244L8.30176 44.6867H43.698L45.3767 12.0244H6.62305Z"
                            fill="white"
                          />
                          <path
                            d="M17.1718 50.4287H8.64648V56.6118H17.1718V50.4287Z"
                            fill="white"
                          />
                          <path
                            d="M30.2636 50.4287H21.7383V56.6118H30.2636V50.4287Z"
                            fill="white"
                          />
                          <path
                            d="M43.3554 50.4287H34.8301V56.6118H43.3554V50.4287Z"
                            fill="white"
                          />
                          <path
                            d="M17.1718 60.9487H8.64648V67.1318H17.1718V60.9487Z"
                            fill="white"
                          />
                          <path
                            d="M30.2636 60.9487H21.7383V67.1318H30.2636V60.9487Z"
                            fill="white"
                          />
                          <path
                            d="M43.3554 60.9487H34.8301V67.1318H43.3554V60.9487Z"
                            fill="white"
                          />
                          <path
                            d="M17.1718 71.4683H8.64648V77.6513H17.1718V71.4683Z"
                            fill="white"
                          />
                          <path
                            d="M30.2636 71.4683H21.7383V77.6513H30.2636V71.4683Z"
                            fill="white"
                          />
                          <path
                            d="M43.3554 71.4683H34.8301V77.6513H43.3554V71.4683Z"
                            fill="white"
                          />
                          <path
                            d="M43.3533 81.2729H8.64648V109H43.3533V81.2729Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M38.2345 81.2729H32.1289V103.98H38.2345V81.2729Z"
                            fill="white"
                          />
                          <path
                            d="M15.5781 103.982C17.4809 103.982 19.0234 102.467 19.0234 100.597C19.0234 98.7275 17.4809 97.2119 15.5781 97.2119C13.6753 97.2119 12.1328 98.7275 12.1328 100.597C12.1328 102.467 13.6753 103.982 15.5781 103.982Z"
                            fill="white"
                          />
                          <path
                            d="M15.5781 99.2763C17.4809 99.2763 19.0234 97.7607 19.0234 95.8911C19.0234 94.0215 17.4809 92.5059 15.5781 92.5059C13.6753 92.5059 12.1328 94.0215 12.1328 95.8911C12.1328 97.7607 13.6753 99.2763 15.5781 99.2763Z"
                            fill="white"
                          />
                          <path
                            d="M43.9454 5.5542H8.05078V7.03288H43.9454V5.5542Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3222_5700">
                            <rect width="52" height="109" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="py-[0.938rem] px-8 text-black">
                      <HeadingText type="h5" className="">
                        {t("project_feature_device_payment")}
                      </HeadingText>
                      <ul className="list-disc pl-16 mt-12">
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_device_payment_item_1")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_device_payment_item_2")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_device_payment_item_3")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_device_payment_item_4")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_device_payment_item_5")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_device_payment_item_6")}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block">
                    <div className="w-full aspect-[16/8] md:aspect-[16/14] flex items-center justify-center">
                      <svg
                        width="124"
                        height="77"
                        viewBox="0 0 124 77"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_3222_5689)">
                          <path
                            d="M103.834 13.6836H0V76.9973H103.834V13.6836Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M99.9496 26.2905H3.88281V36.3111H99.9496V26.2905Z"
                            fill="white"
                          />
                          <path
                            d="M38.4251 66.0947H6.13672V69.7842H38.4251V66.0947Z"
                            fill="white"
                          />
                          <path
                            d="M86.339 70.8318C88.964 70.8318 91.092 68.7109 91.092 66.0946C91.092 63.4783 88.964 61.3574 86.339 61.3574C83.7139 61.3574 81.5859 63.4783 81.5859 66.0946C81.5859 68.7109 83.7139 70.8318 86.339 70.8318Z"
                            fill="white"
                          />
                          <path
                            d="M92.9444 70.8318C95.5694 70.8318 97.6974 68.7109 97.6974 66.0946C97.6974 63.4783 95.5694 61.3574 92.9444 61.3574C90.3194 61.3574 88.1914 63.4783 88.1914 66.0946C88.1914 68.7109 90.3194 70.8318 92.9444 70.8318Z"
                            fill="white"
                          />
                          <path
                            d="M104.044 39.7828C115.066 39.7828 124.002 30.8771 124.002 19.8914C124.002 8.90567 115.066 0 104.044 0C93.0214 0 84.0859 8.90567 84.0859 19.8914C84.0859 30.8771 93.0214 39.7828 104.044 39.7828Z"
                            fill="white"
                          />
                          <path
                            d="M104.044 36.3138C113.144 36.3138 120.521 28.9612 120.521 19.8913C120.521 10.8214 113.144 3.46875 104.044 3.46875C94.9436 3.46875 87.5664 10.8214 87.5664 19.8913C87.5664 28.9612 94.9436 36.3138 104.044 36.3138Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M94.9473 18.1427L102.18 25.3535L113.143 14.4297"
                            stroke="white"
                            strokeWidth="5"
                            strokeMiterlimit="10"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3222_5689">
                            <rect width="124" height="77" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="py-[0.938rem] px-8 text-black">
                      <HeadingText type="h5" className="">
                        {t("project_feature_payment_gateway")}
                      </HeadingText>
                      <ul className="list-disc pl-16 mt-12">
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_payment_gateway_item_1")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_payment_gateway_item_2")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_payment_gateway_item_3")}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block">
                    <div className="w-full aspect-[16/8] md:aspect-[16/14] flex items-center justify-center">
                      <svg
                        width="97"
                        height="102"
                        viewBox="0 0 97 102"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_3222_5738)">
                          <path
                            d="M61.3283 0H0V102H61.3283V0Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M37.5142 90.8091H23.8125V95.9726H37.5142V90.8091Z"
                            fill="white"
                          />
                          <path
                            d="M54.6424 6.96191H6.6875V82.5853H54.6424V6.96191Z"
                            fill="white"
                          />
                          <path
                            d="M30.6659 67.274C39.5703 67.274 46.7887 59.9884 46.7887 51.0012C46.7887 42.0141 39.5703 34.7285 30.6659 34.7285C21.7614 34.7285 14.543 42.0141 14.543 51.0012C14.543 59.9884 21.7614 67.274 30.6659 67.274Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M49.6103 18.71H11.7188V29.28H49.6103V18.71Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M27.3797 59.6071L20.3789 52.539L22.7016 50.197L27.3797 54.9186L38.6296 43.5664L40.9501 45.9106L27.3797 59.6071Z"
                            fill="white"
                          />
                          <path
                            d="M50.0567 76.0588L40.5581 77.6054L36.8848 68.3367L50.0589 63.4383L52.8106 63.6748L48.3076 49.6601L44.1264 35.4356L53.776 32.5566L62.0028 48.0406L79.4194 44.5121L88.3051 61.673V74.6293L65.2011 82.9568L50.0567 76.0588Z"
                            fill="white"
                          />
                          <path
                            d="M56.6226 66.7304L50.8783 48.8558L47.4742 37.2694L52.4391 35.7891L60.5739 51.1007L77.9709 47.5766L85.6131 62.3402V72.7137L65.3199 80.0292L50.4273 73.2461L42.2575 74.5762L40.4121 69.9209L50.4273 66.1979L56.6226 66.7304Z"
                            fill="#00A2B6"
                          />
                          <path
                            d="M64.5249 97.0113L96.9961 84.9922L91.643 70.26L59.1718 82.2792L64.5249 97.0113Z"
                            fill="white"
                          />
                          <path
                            d="M90.0501 73.7344L62.6328 83.8828L66.1325 93.5141L93.5497 83.3657L90.0501 73.7344Z"
                            fill="#00A2B6"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3222_5738">
                            <rect width="97" height="102" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="py-[0.938rem] px-8 text-black">
                      <HeadingText type="h5" className="">
                        {t("project_feature_aplication_solution")}
                      </HeadingText>
                      <ul className="list-disc pl-16 mt-12">
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_aplication_solution_item_1")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_aplication_solution_item_2")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_aplication_solution_item_3")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_aplication_solution_item_4")}
                        </li>
                        <li className="text-14 leading-[1.375rem]">
                          {t("project_feature_aplication_solution_item_5")}
                        </li>
                      </ul>
                    </div>
                  </div>
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
                    {t("certification_title")}
                  </HeadingText>
                </div>

                <div className="w-full mt-32">
                  <div className="max-w-[949px] w-full aspect-[16/6] mx-auto relative">
                    <Image
                      src="/images/thumb/thumb-tech-profile-1.jpg"
                      alt="Thumb 1"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
                    />
                  </div>
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
                    {t.rich("product_title", {
                      br: () => <br />,
                    })}
                  </HeadingText>
                </div>

                <div className="w-full mt-32 md:mt-[4rem]">
                  <div className="max-w-[949px] w-full aspect-[16/7] mx-auto relative">
                    <Image
                      src="/images/thumb/thumb-tech-profile-2.jpg"
                      alt="Thumb 1"
                      fill={true}
                      priority={true}
                      sizes="auto"
                      className="block w-full h-full absolute object-center object-contain top-0 left-0 z-0"
                    />
                  </div>
                </div>
              </div>
            </div>

            <TechProfileCollapseContent />

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
                <Slider {...settings} autoplaySpeed={3000} ref={sliderRef}>
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

            <div className="block">
              <div className="px-16">
                <div className="text-center block relative">
                  <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
                  <HeadingText
                    type="h4"
                    className="bg-white text-black uppercase relative z-[1] inline-block px-[2.375rem]"
                  >
                    {t("project_partner_title")}
                  </HeadingText>
                </div>
              </div>

              <div className="block">
                <Slider {...settings} autoplaySpeed={3500} ref={sliderRef}>
                  {dataPartner.map((item, index) => (
                    <div className="block aspect-square px-32" key={index}>
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
