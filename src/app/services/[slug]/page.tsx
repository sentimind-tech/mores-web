import { PageHeader } from '@/components/PageHeader';
import { SectionDetail } from '@/components/SectionDetail';
import { ServiceDetailHeader, TServiceDetailHeaderMenuItem } from '@/components/ServiceDetailHeader';
import { getServiceDetail, getServiceList, TServiceParams } from '@/services/service';
import { TService } from '@/types/service';
import { notFound } from 'next/navigation';
import { customConfig } from '../../../../config';
import { getInsightList, TInsightParams } from '@/services/insight';

const service: TService = {
    id: "1",
    name: "TRAVEL & TOURISM",
    description: "Indonesia's geographical and socio-cultural conditions create significant opportunities in the tourism business. By focusing on innovation, community empowerment, and the use of technology, this sector has the potential to continue growing and contribute significantly to national economic development. We recognize that with these great opportunities, there are always challenges in developing the potential of destinations, both in terms of infrastructure and marketing.<br/><br/>Our team understands that each destination has unique potential, so we are committed to helping businesses and organizations in this sector enhance their operations, marketing strategies, destination development, risk management, and customer experience through innovative solutions and deep insights.",
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

export default async function ServiceDetail({ params }: any) {
    const service = await getServiceDetail(params.slug)
    if (!service) notFound()

    const query: TServiceParams = {
        parentServiceId: params.slug
    }
    const serviceList = await getServiceList(query)

    const ourExperience = service.our_experiences || []

    const insightQuery: TInsightParams = {
        serviceId: params.slug
    }
    const insights = await getInsightList(insightQuery)


    return <section className="flex flex-col">
        <section id="overview">
            <PageHeader background="/images/bg-industries.png" title={service.name} subtitle="FOCUS INDUSTRIES" />
            <div className='border-b border-gray-ash py-24 px-64'>
                <ServiceDetailHeader title={service.name} menus={menus} />
            </div>
        </section>

        <SectionDetail overview={service.overview} services={serviceList || undefined}
            ourExperience={`${customConfig.POCKETBASE_FILE_URL}/services/${service.id}/${ourExperience[0]}`}
            insights={insights || undefined}
        />


    </section>
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

