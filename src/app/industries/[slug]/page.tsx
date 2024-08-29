'use client';

import { InsightCard } from '@/components/InsightCard';
import { PageHeader } from '@/components/PageHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceDetailHeader, TServiceDetailHeaderMenuItem } from '@/components/ServiceDetailHeader';
import { TIndustry } from '@/types/industry';
import { TInsight } from '@/types/insight';
import Image from "next/image";

const industry: TIndustry = {
    id: 1,
    name: "TRAVEL & TOURISM",
    description: "Indonesia's geographical and socio-cultural conditions create significant opportunities in the tourism business. By focusing on innovation, community empowerment, and the use of technology, this sector has the potential to continue growing and contribute significantly to national economic development. We recognize that with these great opportunities, there are always challenges in developing the potential of destinations, both in terms of infrastructure and marketing.<br/><br/>Our team understands that each destination has unique potential, so we are committed to helping businesses and organizations in this sector enhance their operations, marketing strategies, destination development, risk management, and customer experience through innovative solutions and deep insights.",
    slug: "strategic-communication"
}


const menus: TServiceDetailHeaderMenuItem[] = [
    {
        name: "OVERVIEW",
        id: "overview",
    },
    {
        name: "OUR EXPERIENCE",
        id: "our-experience"
    },
    {
        name: "FEATURED INSIGHT",
        id: 'featured-insight'
    }
]

const insightList: TInsight[] = [
    {
        id: 1,
        title: "To execute every project,Mores gains insights from local",
        published_date: "2024-08-28",
        read_time: "5 min",
        content: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        summary: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        pdf_file: "/",
        button_image: "/images/insight/insight-example.png",
        slug: 'to-execute-every-project-mores-gains-insights-from-local',
    },
    {
        id: 2,
        title: "To execute every project,Mores gains insights from local",
        published_date: "2024-08-28",
        read_time: "5 min",
        content: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        summary: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        pdf_file: "/",
        button_image: "/images/insight/insight-example.png",
        slug: 'to-execute-every-project-mores-gains-insights-from-local',
    },
    {
        id: 3,
        title: "To execute every project,Mores gains insights from local",
        published_date: "2024-08-28",
        read_time: "5 min",
        content: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        summary: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        pdf_file: "/",
        button_image: "/images/insight/insight-example.png",
        slug: 'to-execute-every-project-mores-gains-insights-from-local',
    },
    {
        id: 4,
        title: "To execute every project,Mores gains insights from local",
        published_date: "2024-08-28",
        read_time: "5 min",
        content: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        summary: "The Travel & Tourism industry is a dynamic and expansive sector that encompasses a wide range of businesses and services dedicated to facilitating travel, exploration, and experiences across the globe.",
        pdf_file: "/",
        button_image: "/images/insight/insight-example.png",
        slug: 'to-execute-every-project-mores-gains-insights-from-local',
    }
]
export default async function IndustryDetail({ params }: any) {
    const dummyAction = (name: string) => {
        console.log(name)
    }
    return <section className="flex flex-col">
        <section>
            <PageHeader background="/images/bg-industries.png" title="Transportation & Logistics" subtitle="FOCUS INDUSTRIES" />
            <div className='border-b border-gray-ash py-24 px-64'>
                <ServiceDetailHeader title={industry.name} menus={menus} onClick={dummyAction} />
            </div>
        </section>

        <section className="px-120 py-100 flex flex-col gap-100">
            <section className=''>
                <p dangerouslySetInnerHTML={{ __html: industry.description }} ></p>
            </section>
            <section className="flex flex-col gap-50">
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
            </section>
            <section className="flex flex-col gap-50">
                <SectionHeader title="FEATURED INSIGHTS" />
                <div className="grid grid-cols-4 gap-50">
                    {insightList.map(insight => <InsightCard image={insight.button_image} title={insight.title} description={insight.summary} subtitle={industry.name} path={`/insight/${insight.slug}`} />)}
                </div>
            </section>

        </section>


    </section>
};


