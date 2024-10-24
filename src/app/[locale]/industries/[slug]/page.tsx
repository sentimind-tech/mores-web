import { PageHeader } from '@/components/PageHeader'
import { SectionDetail } from '@/components/SectionDetail'
import {
  ServiceDetailHeader,
  TServiceDetailHeaderMenuItem,
} from '@/components/ServiceDetailHeader'
import { getIndustryDetail } from '@/services/industry'
import { notFound } from 'next/navigation'
import { customConfig } from '../../../../../config'
import { getInsightList, TInsightParams } from '@/services/insight'
import Layout from '@/components/Layout'
import { unstable_setRequestLocale } from 'next-intl/server'
import SectionHelp from '@/components/Section/SectionHelp'
import { SELECTED_MENU_INDUSTRY } from '@/store/constants'

type Props = {
  params: {
    locale: string
    slug: string
  }
}

export default async function IndustryDetail({
  params: { locale, slug },
}: Props) {
  unstable_setRequestLocale(locale)

  const industry = await getIndustryDetail(slug)
  if (!industry) notFound()

  // Fetch Insight
  const query: TInsightParams = {
    industryId: industry.id,
    isFeatured: true,
  }
  const insightsRes = await getInsightList(query, 1, 4)
  const insights = insightsRes?.items

  // Initiate data
  const ourExperience = industry.our_experiences || ['']
  const ourExperiencePath = `${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${ourExperience[0]}`

  const coverImage = industry.cover_image
  const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${coverImage}`

  return (
    <Layout selectedMenu={SELECTED_MENU_INDUSTRY}>
      <section className="flex flex-col mb-[100px]">
        <section>
          <PageHeader
            background={coverImagePath}
            title={industry.name}
            subtitle="FOCUS INDUSTRIES"
            subtitleCustomClass="text-white"
          />

          <div className="section-navigation">
            <ServiceDetailHeader
              title={industry.name}
              overview={
                locale == 'id' ? industry.overview_id : industry.overview_en
              }
              ourExperience={ourExperience.length > 0 ? ourExperiencePath : null}
              insights={insights || []}
            />
          </div>
        </section>

        <SectionDetail
          overview={
            locale == 'id' ? industry.overview_id : industry.overview_en
          }
          ourExperience={ourExperience.length > 0 ? ourExperiencePath : null}
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
