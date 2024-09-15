import { PageHeader } from '@/components/PageHeader'
import { SectionDetail } from '@/components/SectionDetail'
import { ServiceDetailHeader } from '@/components/ServiceDetailHeader'
import {
  getServiceDetail,
  getServiceList,
  TServiceParams,
} from '@/services/service'
import { notFound } from 'next/navigation'
import { customConfig } from '../../../../../config'
import { getInsightList, TInsightParams } from '@/services/insight'
import Layout from '@/components/Layout'
import SectionHelp from '@/components/Section/SectionHelp'

type Props = {
  params: {
    locale: string
    slug: string
  }
}

export default async function ServiceDetail({
  params: { locale, slug },
}: Props) {
  const service = await getServiceDetail(slug)
  if (!service) notFound()

  //   Fetch Service Child
  const query: TServiceParams = {
    parentServiceId: slug,
  }
  const serviceList = await getServiceList(query)

  // Fetch insight
  const insightQuery: TInsightParams = {
    serviceId: slug,
    isFeatured: true,
  }
  const insightsRes = await getInsightList(insightQuery, 1, 4)
  const insights = insightsRes?.items

  // Initiate data
  const ourExperience = service.our_experiences || ['']
  const ourExperiencePath = `${customConfig.POCKETBASE_FILE_URL}/services/${service.id}/${ourExperience[0]}`

  const coverImage = service.cover_image
  const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/services/${service.id}/${coverImage}`

  return (
    <Layout>
      <section className="flex flex-col mb-[100px]">
        <section>
          <PageHeader
            background={coverImagePath}
            title={service.name}
            subtitle="FOCUS SERVICES"
            subtitleCustomClass='text-white'
          />
          <div className="section-navigation">
            <ServiceDetailHeader
              title={service.name}
              overview={
                locale == 'id' ? service.overview_id : service.overview_en
              }
              serviceList={serviceList || []}
              ourExperience={ourExperiencePath}
              insights={insights || []}
            />
          </div>
        </section>

        <SectionDetail
          overview={locale == 'id' ? service.overview_id : service.overview_en}
          services={serviceList || undefined}
          ourExperience={ourExperiencePath}
          insights={insights || undefined}
        />
      </section>
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  )
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
