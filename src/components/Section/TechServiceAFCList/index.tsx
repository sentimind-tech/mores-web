"use client";

import { useState, useEffect } from "react";
import { HeadingText, BodyText } from "@/components/Text";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getMoresTechAFCBanner } from "@/services/mores_tech";
import { TConfigMoresTechAFCBanner } from "@/types/app_config";
import { imagePath } from "@/module/helper";

const dataList = [
  {
    title: "CONTACTLESS PAYMENT:",
    desc: "By eliminating the need for actual cash and facilitating contactless payment alternatives like smart cards, smartphone apps, or RFID tokens, AFC systems enable passengers to board more conveniently and hygienically.",
  },
  {
    title: "EFFICIENT TICKETING:",
    desc: "By streamlining the ticketing process and allowing customers to load credit or buy tickets ahead of time, AFC shortens wait times and enhances the traveler experience overall.",
  },
  {
    title: "Data Management:",
    desc: "Data information on passenger movements and fare utilization is gathered and stored by AFC systems. Public transportation systems can be made more efficient by analyzing this data to improve scheduling, pricing, and route optimization.",
  },
  {
    title: "Security:",
    desc: "By decreasing the need for cash, AFC systems improve security by deterring would be robbers. In order to maintain accountability and combat fraud, they also offer an audit record of transactions.",
  },
  {
    title: "Interoperability:",
    desc: "Numerous AFC systems are made to function with numerous transportation modalities, enabling users to pay with a single card on a variety of public transportation vehicles, including buses, subways, and trams.",
  },
  {
    title: "Accessability:",
    desc: "An easy-to-use interface, options for passengers with specific requirements, integrated voice guiding, and other features are common in AFC systems for individuals with impairments",
  },
  {
    title: "REVENUE COLLECTION:",
    desc: "By decreasing the need for cash, AFC systems improve security by deterring would be robbers. In order to maintain accountability and combat fraud, they also offer an audit record of transactions.",
  },
  {
    title: "REAL-TIME INFORMATION:",
    desc: "Numerous AFC systems are made to function with numerous transportation modalities, enabling users to pay with a single card on a variety of public transportation vehicles, including buses, subways, and trams.",
  },
  {
    title: "Environmental Benefits:",
    desc: "An easy-to-use interface, options for passengers with specific requirements, integrated voice guiding, and other features are common in AFC systems for individuals with impairments",
  },
];

const TechServiceAFCList = ({ id }: { id: string }) => {
  const t = useTranslations("TechMores");
  const [bannerImage, setBannerImage] = useState<TConfigMoresTechAFCBanner>();
  const [coverImage, setCoverImage] = useState<string | null>(null);

  const fetchDataBanner = async () => {
    try {
      const bannerRes = await getMoresTechAFCBanner(
        "automated_fare_collection_mores_tech_image"
      );

      if (bannerRes) {
        setBannerImage(bannerRes);
      }

      return;
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataBanner();
  }, []);

  useEffect(() => {
    if (bannerImage) {
      let imageThumb = imagePath(
        bannerImage.id,
        bannerImage?.files?.[0],
        "app_config_files"
      );

      setCoverImage(imageThumb);
    }
  }, [bannerImage]);

  return (
    <section className="py-[3.125rem] md:py-[6.25rem] px-0 md:px-16 ">
      <div className="w-full max-w-[1040px] mx-auto">
        <div className="px-16 md:px-0">
          <div className="text-center block relative">
            <div className="w-full h-[1px] bg-gray-cloud absolute top-[50%] left-0 z-[0]"></div>
            <HeadingText
              type="h4"
              className="bg-white text-black uppercase relative z-[1] inline-block px-16 md:px-[2.375rem] max-w-[500px]"
            >
              {t("service_data_afc_title")}
            </HeadingText>
          </div>
        </div>

        <div className="mt-[3.75rem] px-16 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
            {dataList.map((item, index) => (
              <div className="border-t border-gray-silver py-12" key={index}>
                <HeadingText type="h4" className="text-blue-pacific uppercase">
                  {item.title}
                </HeadingText>
                <BodyText type="body2" className="text-black mt-16 block">
                  {item.desc}
                </BodyText>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[3.125rem] mt-[5.313rem] px-16 md:px-0">
          <div className="block">
            <HeadingText type="h4" className="text-blue-pacific uppercase">
              customization:
            </HeadingText>
            <BodyText type="body2" className="text-black mt-16 block">
              By decreasing the need for cash, AFC systems improve security by
              deterring would be robbers. In order to maintain accountability
              and combat fraud, they also offer an audit record of transactions.
            </BodyText>
          </div>
          <div className="block">
            <div className="relative aspect-[16/7] max-w-[337px]">
              <Image
                src="/images/logo/logo-braga-tech-big.png"
                alt="Thumb"
                fill={true}
                priority={true}
                sizes="auto"
                className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
              />
            </div>
          </div>
        </div>

        {coverImage && (
          <div className="mt-32">
            <div className="w-full min-h-[300px] md:min-h-[341px] py-24 flex justify-center items-center relative">
              <div className="relative aspect-[16/4.4] w-full">
                <Image
                  src={coverImage}
                  alt="Thumb"
                  fill={true}
                  priority={true}
                  sizes="auto"
                  className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechServiceAFCList;
