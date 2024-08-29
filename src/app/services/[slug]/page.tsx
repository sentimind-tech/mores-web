'use client';

import { InsightCard } from '@/components/InsightCard';
import { PageHeader } from '@/components/PageHeader';
import { SectionDetail } from '@/components/SectionDetail';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceDetailHeader, TServiceDetailHeaderMenuItem } from '@/components/ServiceDetailHeader';
import { TInsight } from '@/types/insight';
import { TService } from '@/types/service';
import Image from "next/image";

const service: TService = {
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
export default async function ServiceDetail({ params }: any) {
    const scrollToView = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return <section className="flex flex-col">
        <section id="overview">
            <PageHeader background="/images/bg-industries.png" title={service.name} subtitle="FOCUS INDUSTRIES" />
            <div className='border-b border-gray-ash py-24 px-64'>
                <ServiceDetailHeader title={service.name} menus={menus} onClick={scrollToView} />
            </div>
        </section>

        <SectionDetail />


    </section>
};


