"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BodyText, HeadingText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import { TInsightPagination } from "@/types/insight";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getInsightDetail } from "@/services/insight";
import { TInsight } from "@/types/insight";
import { imagePath } from "@/module/helper";

type THomeHighlightProps = {
  id?: any | null;
};
const HomeHighlight = (props: THomeHighlightProps) => {
  const { id } = props;
  const localActive = useLocale();
  const [insightData, setinsightData] = useState<TInsight | null>(null);
  const [imageCover, setImageCover] = useState<string | null>("");

  const fetchInsightDetail = async (insightId: string) => {
    try {
      const response = await getInsightDetail(insightId);

      if (response) {
        setinsightData(response);
      }

      return;
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchInsightDetail(id);
    }
  }, [id]);

  useEffect(() => {
    if (insightData) {
      let imageThumb = imagePath(
        insightData.id,
        insightData.cover_image,
        "insights"
      );

      setImageCover(imageThumb);
    }
  }, [insightData]);

  return (
    insightData !== null && (
      <section className="bg-white-smoke md:bg-white block relative md:px-16 pt-[3.125rem] md:pt-[7.75rem] md:pb-[3.094rem]">
        <div className="w-full max-w-[1037px] mx-auto">
          <div className="bg-blue-pacific md:pb-6 md:pt-0">
            <div className="md:bg-white-smoke flex flex-col md:flex-row items-center md:h-[345px] a">
              <div className="bg-white md:bg-transparent w-full flex items-center justify-start min-h-[315px] md:min-h-0 px-[1.438rem] md:px-0 md:pl-[4%] lg:pl-[8%] mb-[0.875rem] md:mb-0">
                <div className="w-full md:w-2/3 text-black">
                  {/* <BodyText
                    type="body2"
                    className="block mb-[0.125rem] !font-graphik md:!font-inter !text-12 md:!text-14 !leading-[0.813rem] md:!leading-[1.375rem] font-medium md:font-normal"
                  >
                    MORES OUTLOOK 2023:
                  </BodyText> */}
                  <HeadingText
                    type="h4"
                    className="block mb-24 md:mb-[0.688rem]"
                  >
                    {insightData?.title}
                  </HeadingText>

                  <Link href={`/${localActive}/insights`}>
                    <ButtonPrimary size="small">EXPLORE NOW</ButtonPrimary>
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-[340px] lg:w-[408px] aspect-[8/6] md:aspect-auto md:h-full relative shrink-0">
                {imageCover && (
                  <Image
                    src={imageCover}
                    alt="Thumb highlight"
                    fill={true}
                    priority={true}
                    sizes="auto"
                    className="block w-full h-full absolute object-center object-cover top-0 left-0 z-0"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default HomeHighlight;
