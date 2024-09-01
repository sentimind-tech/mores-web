import { PageHeader } from '@/components/PageHeader'
import { SectionDetail } from '@/components/SectionDetail'
import {
  ServiceDetailHeader,
  TServiceDetailHeaderMenuItem,
} from '@/components/ServiceDetailHeader'
import { getIndustryDetail } from '@/services/industry'
import { notFound } from 'next/navigation'
import { customConfig } from '../../../../config'
import { getInsightList, TInsightParams } from '@/services/insight'

const menus: TServiceDetailHeaderMenuItem[] = [
  {
    name: 'OVERVIEW',
    id: 'overview',
  },
  {
    name: 'OUR EXPERIENCE',
    id: 'our-experience',
  },
  {
    name: 'FEATURED INSIGHT',
    id: 'featured-insight',
  },
]

export default async function IndustryDetail({ params }: any) {
  const industry = await getIndustryDetail(params.slug)
  if (!industry) notFound()

  // Fetch Insight
  const query: TInsightParams = {
    industryId: industry.id,
  }
  const insights = await getInsightList(query)

  // Initiate data
  const ourExperience = industry.our_experiences || ['']
  const ourExperiencePath = `${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${ourExperience[0]}`

  return (
    <section className="flex flex-col">
      <section>
        <PageHeader
          background="/images/bg-industries.png"
          title="Transportation & Logistics"
          subtitle="FOCUS INDUSTRIES"
        />
        <div className="border-b border-gray-ash py-24 px-64">
          <ServiceDetailHeader
            title={industry.name}
            overview={industry.overview}
            ourExperience={ourExperiencePath}
            insights={insights || []}
          />
        </div>
      </section>

      <SectionDetail
        overview={industry.overview}
        ourExperience={ourExperiencePath}
        insights={insights || undefined}
      />
    </section>
  )
}
