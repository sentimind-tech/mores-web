import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { DisplayText, BodyText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";

export default async function UnderConstruction({ params }: any) {
  return (
    <section className="h-[100dvh] w-full overflow-hidden">
      <div className="w-full h-[calc(100vh_-_37px)] h-[calc(100dvh_-_37px)] relative text-center text-white">
        <div className="w-full h-full absolute top-0 left-0 bg-[url('/images/bg-under-construction.jpg')] bg-no-repeat bg-cover bg-center z-0" />
        <div className="w-full max-w-[180px] md:max-w-[237px] aspect-[16/5] block absolute top-[5rem] md:top-[6.25rem] left-0 right-0 mx-auto">
          <Image
            src="/images/logo-mores.png"
            alt="Logo"
            fill={true}
            priority={true}
            sizes="auto"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full relative z-[1] px-16">
          <DisplayText
            type="huge"
            className="uppercase mb-[2rem] md:mb-[3.938rem] mt-[2.5rem]"
          >
            UNDER CONSTRUCTION
          </DisplayText>
          <div className="w-full max-w-[41.563rem] mx-auto">
            <BodyText className="uppercase text-16 md:text-20 leading-normal md:leading-[1.5rem]">
              Harnessing the Latest Tech and Data to Elevate Your Experience!
            </BodyText>
          </div>
          <ButtonPrimary className="uppercase mt-[3.938rem]">
            notify me
          </ButtonPrimary>
        </div>
      </div>
      <div className="w-full h-[37px] text-center flex justify-center items-center">
        <BodyText className="uppercase text-12 leading-[0.938rem]">
          © 2024 MORES STRATEGICS. ALL RIGHTS RESERVED.
        </BodyText>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Mores | Under Construction",
};
