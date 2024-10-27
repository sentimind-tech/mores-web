import { PageHeader } from '@/components/PageHeader'
import {
  getInsightDetail,
  getInsightList,
  TInsightParams,
} from '@/services/insight'
import { notFound } from 'next/navigation'
import { customConfig } from '../../../../../config'
import Layout from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { InsightCard } from '@/components/InsightCard'
import Link from 'next/link'
import { formatDate, getRandomElement } from '@/module/helper'
import Image from 'next/image'
import { InsightAction } from '@/components/InsightAction'
import SectionHelp from '@/components/Section/SectionHelp'
import { SELECTED_MENU_INSIGHT } from '@/store/constants'

type Props = {
  params: {
    locale: string
    slug: string
  }
}

export default async function InsightDetail({
  params: { locale, slug },
}: Props) {
  const insight = await getInsightDetail(slug)
  if (!insight) notFound()

  //   Fetch NEXT Insight
  const randomService = getRandomElement(insight.expand?.service_tags)
  const randomIndustry = getRandomElement(insight.expand?.industry_tags)
  const query: TInsightParams = {
    industryId: randomIndustry?.id,
    serviceId: randomService?.id,
    insightId: insight.id,
  }
  const nextInsightRes = await getInsightList(query, 1, 4)
  const nextInsights = nextInsightRes?.items || []

  // Initiate data
  const coverImage = insight.cover_image
  const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${coverImage}`
  const pageTitle = insight?.expand?.industry_tags?.[0]
    ? insight?.expand?.industry_tags?.[0].name.toUpperCase()
    : insight?.expand?.service_tags?.[0].name.toUpperCase()
  const pageSubtitle = insight?.expand?.industry_tags?.[0]
    ? 'INSIGHT/INDUSTRIES/' + pageTitle
    : 'INSIGHT/SERVICES/' + pageTitle

  const authors = insight.expand?.authors || []
  return (
    <Layout selectedMenu={SELECTED_MENU_INSIGHT}>
      <section className="flex flex-col gap-24 mobile-min:gap-32 lg:gap-72 text-inter">
        <section>
          <PageHeader
            background={coverImagePath}
            title={pageTitle}
            subtitle={pageSubtitle}
            subtitleCustomClass="text-white"
          />
        </section>
        <section className="flex flex-col gap-24 mobile-min:gap-32 lg:gap-72 section-padding-x pb-24 md:pb-50 lg:pb-100">
          <div className="flex gap-12 flex-wrap justify-between">
            <div className="flex gap-32">
              <div className="max-w-[274px] leading-[16.52px] text-14">
                By&nbsp;
                {authors.map((author, index) => (
                  <span key={author.name}>
                    <Link
                      href={author.url}
                      target="_blank"
                      className="underline"
                      rel="noopener noreferrer"
                    >
                      {author.name}
                    </Link>
                    {index < authors.length - 1 && ', '}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 leading-[16.52px] text-14 ">
                <div className="">{formatDate(insight.published)}</div>
                <div className="text-blue-pacific ">
                  {insight.read_time} Min Read
                </div>
              </div>
            </div>
            <InsightAction insight={insight} />
          </div>
          <section className="flex flex-col text-inter text-16 leading-[24px]">
            <div
              className="insight-detail"
              dangerouslySetInnerHTML={{
                __html:
                  locale == 'id' ? insight.content_id : insight.content_en,
              }}
            ></div>
            <div className="flex flex-col gap-24 lg:gap-48 mobile-min:text-18 leading-[28px]">
              <div className="flex flex-col gap-24">
                {insight.summary &&
                  insight.summary.length > 0 &&
                  insight.summary.map((summary, index) => {
                    return (
                      <div
                        key={`insight-${insight.id}-summary-${index}`}
                        className="flex items-start gap-20"
                      >
                        <div className="min-w-24">
                          <Image
                            width={24}
                            height={24}
                            src={'/images/icon/triangle.png'}
                            alt="list"
                          />
                        </div>
                        <div className="">{summary}</div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </section>
          {nextInsights.length > 0 && (
            <section id="featured-insight" className="section-header-container">
              <SectionHeader title="NEXT INSIGHTS" />
              <div className="insight-container">
                {nextInsights.map((insight) => {
                  let subTitle = ''
                  if (insight?.expand?.industry_tags) {
                    subTitle = insight.expand?.industry_tags?.[0]?.name
                  } else if (insight?.expand?.service_tags) {
                    subTitle = insight.expand?.service_tags?.[0]?.name
                  }
                  return (
                    <InsightCard
                      key={insight.id}
                      image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                      title={insight.title}
                      description={insight.description}
                      subtitle={subTitle}
                      path={`/${locale}/insights/${insight.id}`}
                    />
                  )
                })}
              </div>
            </section>
          )}
        </section>
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
