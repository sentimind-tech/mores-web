import { ReactNode } from "react";
import { SectionHeader } from "../SectionHeader";
import Image from "next/image";
import { TInsight } from "@/types/insight";
import { InsightCard } from "../InsightCard";
import { customConfig } from "../../../config";
import { TService } from "@/types/service";
import { ServiceCard } from "../ServiceCard";

type TSectionDetailProp = {
    coverSubtitle?: string,
    overview?: string,
    ourExperience?: string,
    insights?: TInsight[],
    services?: TService[],
};
export const SectionDetail = ({ overview, ourExperience, insights, coverSubtitle, services }: TSectionDetailProp) => {
    return <section id="" className="px-120 py-100 flex flex-col gap-100">

        {overview && <section id="overview" className=''>
            <p dangerouslySetInnerHTML={{ __html: overview }} ></p>
        </section>}

        {services && services.length > 0 && <section className="flex flex-col gap-50">
            <SectionHeader title="WHAT WE OFFER" />
            <div className="grid grid-cols-3 gap-50">
                {
                    services.map(service => {
                        const path = service.parent_service_id ? `/services/${service.parent_service_id}/${service.id}` : `/services/${service.id}`
                        return <ServiceCard key={service.id} title={service.name} description={service.description} path={path} />
                    })
                }
            </div>

        </section>
        }

        {ourExperience && <section id="our-experience" className="flex flex-col gap-50">
            <SectionHeader title="OUR EXPERIENCES" />
            <Image
                src={ourExperience}
                alt="OUR EXPERIENCES IMAGES"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
                priority={true}
            />
        </section>}

        {insights && insights.length > 0 && <section id="featured-insight" className="flex flex-col gap-50">
            <SectionHeader title="FEATURED INSIGHTS" />
            <div className="grid grid-cols-4 gap-50">
                {insights.map(insight => {
                    return <InsightCard
                        key={insight.id}
                        image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                        title={insight.title}
                        description={insight.summary}
                        subtitle={coverSubtitle || ""} path={`/insight/${insight.id}`} />
                })}
            </div>
        </section>}

    </section>
}