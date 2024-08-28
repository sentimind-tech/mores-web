import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { DisplayText, BodyText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceValueCard } from "@/components/ServiceValueCard";

export default async function UnderConstruction({ params }: any) {
  return (
    <section className="h-[100dvh] w-full overflow-hidden">
      <div className="w-full h-[calc(100vh_-_37px)] h-[calc(100dvh_-_37px)] relative text-center text-white">
        <div className="w-full h-full absolute top-0 left-0  bg-no-repeat bg-cover bg-center z-0" />
        <div className="w-full max-w-[180px] md:max-w-[237px] aspect-[16/5] block absolute top-[5rem] md:top-[6.25rem] left-0 right-0 mx-auto">

        </div>
        <div className="flex flex-col items-center justify-center w-full h-full relative z-[1] px-16">
          <div className="grid grid-cols-3 w-full text-black gap-x-48 gap-y-50">
            <ServiceValueCard title="DATA" description="Compiling data through rigorous scientific methods." image="" />
          </div>
        </div>
      </div>
      <div className="w-full h-[37px] text-center flex justify-center items-center">

      </div>

    </section>
  );
}

export const metadata: Metadata = {
  title: "Mores | Under Construction",
};
