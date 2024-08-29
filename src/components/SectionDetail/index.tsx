import { ReactNode } from "react";
import { SectionHeader } from "../SectionHeader";
import Image from "next/image";
import { TInsight } from "@/types/insight";
import { InsightCard } from "../InsightCard";

type TSectionDetailProp = {
    overview: string?,
    our_experience: string?,
    insights: TInsight[]?
};
export const SectionDetail = ({ overview, our_experience, insights }: TSectionDetailProp) => {
    return <section id="" className="px-120 py-100 flex flex-col gap-100">
        {overview && <section id="overview" className=''>
            <p dangerouslySetInnerHTML={{ __html: overview }} ></p>
        </section>}

        <section className="flex flex-col gap-50">
            <SectionHeader title="WHAT WE OFFER" />
            <Image
                src={"/images/placeholder.png"}
                alt="OUR EXPERIENCES IMAGES"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                priority={true}
            />
        </section>
        {our_experience && <section id="our-experience" className="flex flex-col gap-50">
            <SectionHeader title="OUR EXPERIENCES" />
            <Image
                src={"/images/placeholder.png"}
                alt="OUR EXPERIENCES IMAGES"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                priority={true}
            />
        </section>}
        {insights && <section id="featured-insight" className="flex flex-col gap-50">
            <SectionHeader title="FEATURED INSIGHTS" />
            <div className="grid grid-cols-4 gap-50">
                {insights.map(insight => <InsightCard image={insight.button_image} title={insight.title} description={insight.summary} subtitle={insight.name} path={`/insight/${insight.slug}`} />)}
            </div>
        </section>}


    </section>