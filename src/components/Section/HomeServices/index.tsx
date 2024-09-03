"use client";

import { HeadingText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeServices = () => {
  return (
    <section className="block px-16 py-[3.094rem]">
      <div className="w-full max-w-[1037px] mx-auto">
        <div className="flex justify-between items-center py-[0.188rem] border-b border-gray-cloud text-black">
          <HeadingText type="h3" className="uppercase">
            MORES SPECIALIZES <br /> ON GAME-CHANGING ASPECTS
          </HeadingText>

          <ButtonPrimary size="small" className="uppercase">
            Specialize
          </ButtonPrimary>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default HomeServices;
