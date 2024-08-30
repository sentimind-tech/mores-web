import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { DisplayText, BodyText } from "@/components/Text";
import { ButtonPrimary } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceValueCard } from "@/components/ServiceValueCard";
import { PageHeader } from "@/components/PageHeader";
import { SectionInfo } from "@/components/SectionInfo";
import { SectionDetail } from "@/components/SectionDetail";
import { getServiceList } from "@/services/service";


type TServiceValueCard = {
    title: string
    description: string
    image: string
};

type TServiceList = {
    title: string
    description: string
    path: string
}

const serviceValues: TServiceValueCard[] = [
    {
        title: "DATA",
        description: "Compiling data through rigorous scientific methods.",
        image: "/images/services/service-value-1.png",
    },
    {
        title: "STRATEGY",
        description: "Conducting analysis with seasoned Academics and Professionals.",
        image: "/images/services/service-value-2.png",
    },
    {
        title: "OPERATION",
        description: "Organizing tactical operations with a multi-approach strategy based on specific goals.",
        image: "/images/services/service-value-3.png",
    }
]

export default async function Services({ params }: any) {
    const serviceList = await getServiceList()

    return (
        <section className="flex flex-col">
            <section>
                <PageHeader background="images/bg-services.png" />
            </section>
            <section className="px-120 py-100 flex flex-col gap-100">
                <section className="">
                    <SectionInfo title="Services">
                        <p className="font-normal text-18 leading-[1.75rem] text-justify">
                            Mores Strategics multi-approach strategy development consists of 3 main stages: Data, Strategy, and Operation. Our framework is malleable and tailored to suit our clientsʼ needs and capacity
                        </p>
                    </SectionInfo>
                </section>
                <section className="grid grid-cols-3 w-full text-black gap-x-48 gap-y-50">
                    {serviceValues.map(serviceValue =>
                        <ServiceValueCard key={serviceValue.title} title={serviceValue.title} description={serviceValue.description} image={serviceValue.image} />)}
                </section>
            </section>
            <SectionDetail services={serviceList || undefined} />

        </section>
    );
}

export const metadata: Metadata = {
    title: "Mores | Under Construction",
};
