import { PageHeader } from '@/components/PageHeader'
import { SectionDetail } from '@/components/SectionDetail'
import {
  ServiceDetailHeader,
} from '@/components/ServiceDetailHeader'
import {
  getServiceDetail,
  getServiceList,
  TServiceParams,
} from '@/services/service'
import { notFound } from 'next/navigation'
import { customConfig } from '../../../../../config'
import { getInsightList, TInsightParams } from '@/services/insight'

export default async function ServiceChildDetail({ params }: any) {
  const service = await getServiceDetail(params.subSlug)
  if (!service) notFound()

  const parentService = await getServiceDetail(params.slug)
  if (!parentService) notFound()

  //   Fetch Service Child
  const query: TServiceParams = {
    parentServiceId: params.slug,
  }
  const serviceList = await getServiceList(query)

  // Fetch insight
  const insightQuery: TInsightParams = {
    serviceId: params.slug,
  }
  const insights = await getInsightList(insightQuery)

  // Initiate data
  const ourExperience = service.our_experiences || ['']
  const ourExperiencePath = `${customConfig.POCKETBASE_FILE_URL}/services/${service.id}/${ourExperience[0]}`

  const coverImage = service.cover_image
  const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/services/${service.id}/${coverImage}`

  return (
    <section className="flex flex-col">
      <section>
        <PageHeader
          background={coverImagePath}
          title={service.name}
          subtitle="FOCUS SERVICES"
        />
        <div className="border-b border-gray-ash py-24 px-64">
          <ServiceDetailHeader
            title={service.name}
            overview={service.overview}
            serviceList={serviceList || []}
            ourExperience={ourExperiencePath}
            insights={insights || []}
          />
        </div>
      </section>

      <SectionDetail
        overview={service.overview}
        services={serviceList || undefined}
        ourExperience={ourExperiencePath}
        insights={insights || undefined}
      />
    </section>
  )
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
