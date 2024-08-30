
import { PageHeader } from '@/components/PageHeader';
import { SectionDetail } from '@/components/SectionDetail';
import { ServiceDetailHeader, TServiceDetailHeaderMenuItem } from '@/components/ServiceDetailHeader';
import { getIndustryDetail } from '@/services/industry';
import { notFound } from 'next/navigation';
import { customConfig } from '../../../../config';
import { getInsightList, TInsightParams } from '@/services/insight';

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

export default async function IndustryDetail({ params }: any) {
    const industry = await getIndustryDetail(params.slug)
    if (!industry) notFound()

    const query: TInsightParams = {
        industryId: industry.id
    }
    const insights = await getInsightList(query)

    const ourExperience = industry.our_experiences || []

    return <section className="flex flex-col">
        <section>
            <PageHeader background="/images/bg-industries.png" title="Transportation & Logistics" subtitle="FOCUS INDUSTRIES" />
            <div className='border-b border-gray-ash py-24 px-64'>
                <ServiceDetailHeader title={industry.name} menus={menus} />
            </div>
        </section>

        <SectionDetail overview={industry.overview}
            ourExperience={`${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${ourExperience[0]}`}
            coverSubtitle='FOCUS SERVICES'
            insights={insights || undefined} />
    </section>
};


