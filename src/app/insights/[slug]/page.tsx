import { PageHeader } from '@/components/PageHeader'
import {
  getInsightDetail,
  getInsightList,
  TInsightParams,
} from '@/services/insight'
import { notFound } from 'next/navigation'
import { customConfig } from '../../../../config'
import Layout from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { InsightCard } from '@/components/InsightCard'
import Link from 'next/link'
import { formatDate } from '@/module/helper'
import Image from 'next/image'

export default async function InsightDetail({ params }: any) {
  const insight = await getInsightDetail(params.slug)
  if (!insight) notFound()

  //   Fetch Insight
  const query: TInsightParams = {
    //   industryId: industry.id,
    isFeatured: true,
  }
  const nextInsightRes = await getInsightList(query, 1, 4)
  const nextInsights = nextInsightRes?.items || []

  console.log(insight)

  // Initiate data
  // const coverImage = insight.cover_image
  // const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${coverImage}`
  const coverImagePath = '/images/bg-insight-detail.png'

  const authors = [
    { name: 'Asutosh Padhi', url: 'https://example.com/asutosh-padhi' },
    { name: 'Sven Smit', url: 'https://example.com/sven-smit' },
    { name: 'Ezra Greenberg', url: 'https://example.com/ezra-greenberg' },
    {
      name: 'Roman Belotserkovskiy',
      url: 'https://example.com/roman-belotserkovskiy',
    },
  ]
  return (
    <Layout>
      <section className="flex flex-col gap-72 text-inter">
        <section>
          <PageHeader
            background={coverImagePath}
            title="Transportation & Logistics"
            subtitle="FOCUS INDUSTRIES"
          />
        </section>
        <section className="flex flex-col gap-72 px-120 pb-120">
          <div className="flex justify-between">
            <div className="flex gap-32">
              <div className="max-w-[274px] leading-[14.52px] text-12">
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
              <div className="flex flex-col gap-2 leading-[14.52px] text-12 ">
                <div className="">{formatDate(insight.published)}</div>
                <div className="text-blue-pacific ">
                  {insight.read_time} Min Read
                </div>
              </div>
            </div>
            <div className="flex gap-24">
              <div className="flex flex-col gap-8 cursor-pointer items-center">
                <Image
                  src="/images/icon/share.svg"
                  width={14}
                  height={16}
                  alt="share"
                />
                <span>Share</span>
              </div>
              <div className="flex flex-col gap-8 cursor-pointer items-center">
                <Image
                  src="/images/icon/print.svg"
                  width={14}
                  height={16}
                  alt="share"
                />
                <span>Print</span>
              </div>
              <div className="flex flex-col gap-8 cursor-pointer items-center">
                <Image
                  src="/images/icon/download.svg"
                  width={14}
                  height={16}
                  alt="share"
                />
                <span>Download</span>
              </div>
            </div>
          </div>
          <section className="flex flex-col gap-36 text-inter text-14 leading-[22px]">
            <div dangerouslySetInnerHTML={{ __html: insight.content }}></div>
            <div className="flex flex-col gap-48 text-20 leading-[24px]">
              <div className="font-semibold ">At a Glance</div>
              <div className="flex flex-col gap-24">
                {insight.summary.map((summary, index) => {
                  return (
                    <div
                      key={`insight-${insight.id}-summary-${index}`}
                      className="flex items-start gap-20"
                    >
                      <div>
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
          <section id="featured-insight" className="flex flex-col gap-50">
            <SectionHeader title="NEXT INSIGHTS" />
            <div className="grid grid-cols-4 gap-50">
              {nextInsights.map((insight) => {
                const insightIndusties = insight.expand?.industry_tags || []
                const subTitle =
                  insightIndusties.length > 0 ? insightIndusties[0].name : ''
                return (
                  <InsightCard
                    key={insight.id}
                    image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                    title={insight.title}
                    description={insight.description}
                    subtitle={subTitle}
                    path={`/insights/${insight.id}`}
                  />
                )
              })}
            </div>
          </section>
        </section>
      </section>
    </Layout>
  )
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
