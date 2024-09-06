"use client";

import { useState, useRef, useEffect } from "react";
import { HeadingText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import CardSpecialize from "@/components/Cards/CardSpecialize";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeServiceStyle.css";
import withDimension, { TWithDimensionProps } from "@/utils/withDimension";
import { customConfig } from "../../../../config";
import { TService } from "@/types/service";

type THomeServicesProps = TWithDimensionProps & {
  list: TService[];
};

type THomeServicesItemProps = {
  title: string;
  image: string | null;
  link: string;
};

const imageInsightPath = (id: string, name: string) => {
  if (name == "") return null;

  return `${customConfig.POCKETBASE_FILE_URL}/services/${id}/${name}`;
};

const HomeServices = (props: THomeServicesProps) => {
  const { windowDimension, list } = props;
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [windowWidth, setWindowWidth] = useState(windowDimension.width);
  const [contentReady, setContentReady] = useState(false);

  const transformData = (data: TService[]): THomeServicesItemProps[] => {
    const groupedData: THomeServicesItemProps[] = [];

    if (data == undefined) return [];

    list.map((service) => {
      const transform = {
        title: service.name,
        image: imageInsightPath(service.id, service.button_image),
        link: `/services/${service.id}`,
      };

      groupedData.push(transform);
    });

    return groupedData;
  };

  const transformedServiceData = transformData(list);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    fade: false,
    cssEase: "ease",
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: "specialize-slider",
    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    setWindowWidth(windowDimension.width);
  }, [windowDimension]);

  useEffect(() => {
    // Set initial value once the component is mounted on the client side
    setContentReady(true);
  }, []);

  return (
    <section className="bg-white-smoke md:bg-white block px-16 py-32 md:pt-[3.094rem] md:pb-[3.125rem] w-full overflow-hidden">
      <div className="w-full max-w-[1037px] mx-auto">
        <div className="flex justify-between items-center py-12 border-b border-gray-cloud text-black">
          <HeadingText
            type="h3"
            className="uppercase text-24 md:text-28 leading-[1.75rem] md:leading-[2.5rem]"
          >
            MORES SPECIALIZES <br /> ON GAME-CHANGING ASPECTS
          </HeadingText>

          <Link href="" className="hidden md:block">
            <ButtonPrimary size="small" className="uppercase">
              Specialize
            </ButtonPrimary>
          </Link>
        </div>

        <div className="block pt-[1.625rem] min-h-[317px]">
          <div className={`${contentReady ? "block" : "hidden"}`}>
            <Slider {...settings} ref={sliderRef}>
              {transformedServiceData.map((item, index) => (
                <div
                  className="px-[0.563rem] md:px-[0.875rem] xl:px-[1.313rem]"
                  key={index}
                >
                  <CardSpecialize {...item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withDimension(HomeServices);
