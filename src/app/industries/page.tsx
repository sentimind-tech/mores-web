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
type TServiceList = {
    title: string
    description: string
    path: string
}
const serviceList: TServiceList[] = [
    {
        title: "STRATEGIC COMMUNICATION",
        description: "Strategic communication in the industrial world emphasizes a planned and systematic approach to managing messages and interactions between companies and various stakeholders",
        path: "/"
    },
    {
        title: "STRATEGIC COMMUNICATION",
        description: "Strategic communication in the industrial world emphasizes a planned and systematic approach to managing messages and interactions between companies and various stakeholders",
        path: "/"
    },
    {
        title: "STRATEGIC COMMUNICATION",
        description: "Strategic communication in the industrial world emphasizes a planned and systematic approach to managing messages and interactions between companies and various stakeholders",
        path: "/"
    }, {
        title: "STRATEGIC COMMUNICATION",
        description: "Strategic communication in the industrial world emphasizes a planned and systematic approach to managing messages and interactions between companies and various stakeholders",
        path: "/"
    }

]
export default async function Services({ params }: any) {
    return (
        <section className="flex flex-col">
            <section>
                <PageHeader background="images/bg-industries.png" />
            </section>
            <section className="px-120 py-100 flex flex-col gap-100">
                <section className="">
                    <SectionInfo title="Industries">
                        <div className="flex flex-col gap-48">
                            <div className="font-semibold text-2xl font-inter text-black">OUR STRATEGY IS TAILORED FOR SPECIFIC INDUSTRY WITH MULTI APPROACH BASIS.</div>
                            <p className="font-normal text-18 leading-[1.75rem] text-justify">
                                By profiling the clients first, identifying their industry and their targeted market, we are able to conduct multiple research approaches to reach the best possible strategy and solution for our client goals.
                                <br />
                                <br />
                                This involves understanding their unique characteristics, the specific industry they operate in, and the market they aim to target. By gaining a deep understanding of these factors, we can tailor our research approaches to align with their specific needs. We then employ various research methodologies to gather comprehensive insights and data. This multi-faceted research enables us to develop a strategic plan that is finely tuned to the clientʼs objectives, ensuring that we provide the most effective solutions to help them achieve their goals
                            </p>
                        </div>

                    </SectionInfo>
                </section>
                <section className="flex flex-col gap-50">
                    <SectionHeader title="EXPLORE OUR EXPERTISE" />
                    <div className="grid grid-cols-3 gap-50">
                        {serviceList.map(service => <ServiceCard key={service.title} title={service.title} description={service.description} path={service.path} />)}
                    </div>
                </section>

            </section>


        </section>
    );
}

export const metadata: Metadata = {
    title: "Mores | Under Construction",
};
