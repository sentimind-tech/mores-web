'use client'
import { InsightCard } from '@/components/InsightCard'
import { PageHeader } from '@/components/PageHeader'
import { getInsightList, TInsightParams } from '@/services/insight'
import { TInsight } from '@/types/insight'
import { ReactNode, useEffect, useState } from 'react'
import { customConfig } from '../../../config'
import { ButtonPrimary } from '@/components/Button'
import { Select } from '@/components/Select'
import { Option } from '@/components/Option'
import { getIndustryList } from '@/services/industry'
import { TIndustry } from '@/types/industry'
import { TService } from '@/types/service'
import { getServiceList, TServiceParams } from '@/services/service'
import HeaderContent from '../Section/InsightPage/HeaderContent'

type TFilter = {
  type?: string
  industryId?: string
  serviceId?: string
}
export const InsightList = () => {
  const [insights, setInsights] = useState<TInsight[]>()
  const [industries, setIndustries] = useState<TIndustry[]>()
  const [services, setServices] = useState<TService[]>()
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(16)
  const [filter, setFilter] = useState<TFilter>({})
  const [hasNextPage, setHasNextPage] = useState<Boolean>(false)

  useEffect(() => {
    setPage(1)
  }, [filter])

  useEffect(() => {
    const fetchInsights = async () => {
      const query: TInsightParams = {}
      if (!filter.type || filter.type == 'featured') {
        query.isFeatured = true
      } else {
        query.sortBy = filter.type
        query.isFeatured = false
      }
      if (filter.industryId && filter.industryId != '') {
        query.industryId = filter.industryId
      }
      if (filter.serviceId && filter.serviceId != '') {
        query.serviceId = filter.serviceId
      }

      const insightsRes = await getInsightList(query, page, perPage)
      const data = insightsRes?.items || []

      const hasNextPage = insightsRes?.totalPages != insightsRes?.page
      setHasNextPage(hasNextPage)
      if (page == 1) {
        setInsights(data)
      } else {
        const prevInsight = insights || []
        setInsights([...prevInsight, ...data])
      }
    }
    fetchInsights()
  }, [page, filter])

  useEffect(() => {
    const fetchIndustries = async () => {
      const industryData = await getIndustryList()
      const data = industryData || []
      setIndustries(data)
    }
    const fetchServices = async () => {
      const query: TServiceParams = {
        isAll: true,
      }
      const serviceData = await getServiceList(query)
      const data = serviceData || []
      setServices(data)
    }

    fetchIndustries()
    fetchServices()
  }, [])

  return (
    <section className="flex flex-col">
      <PageHeader title="INSIGHT" background="/images/bg-insights.png" />
      <section className="flex flex-col mt-100 section-padding-x">
        <HeaderContent />
      </section>
      <section className="section-padding flex flex-col gap-48">
        <div className="grid grid-cols-1 mobile-min:grid-cols-3 gap-24">
          <Select
            defaultValue={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          >
            <Option value="featured">Featured Insight</Option>
            <Option value="newest">Newest Insight</Option>
            <Option value="oldest">Oldest Insight</Option>
          </Select>
          <Select
            defaultValue={filter.industryId}
            onChange={(e) =>
              setFilter({ ...filter, industryId: e.target.value })
            }
          >
            <Option value="">Industries</Option>
            {industries?.map((industry) => (
              <Option key={industry.id} value={industry.id}>
                {industry.name}
              </Option>
            ))}
          </Select>
          <Select
            defaultValue={filter.serviceId}
            onChange={(e) =>
              setFilter({ ...filter, serviceId: e.target.value })
            }
          >
            <Option value="">Services</Option>
            {services?.map((service) => (
              <Option key={service.id} value={service.id}>
                {service.name}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-semibold text-2xl text-black font-inter pb-48">
            Most Recent Insights
          </h1>
          <div className="grid grid-cols-1 mobile-min:grid-cols-2 md:grid-cols-4 gap-24 -ml-24">
            {insights?.map((insight, index) => {
              let subTitle = ''
              if (insight?.expand?.industry_tags) {
                subTitle = insight.expand?.industry_tags?.[0]?.name
              } else if (insight?.expand?.service_tags) {
                subTitle = insight.expand?.service_tags?.[0]?.name
              }

              // Change this if grid-cols-change ex: window.innerWidth >= 768 ? 5 : 4
              let gridCols = 2
              if (window.innerWidth > 768) {
                gridCols = 4
              }
              const isFirstRow = (index + 1) % gridCols == 1
              return (
                <div
                  key={insight.id}
                  className={`${
                    !isFirstRow
                      ? 'mobile-min:border-l mobile-minborder-gray-silver'
                      : ''
                  } pb-36 pl-24`}
                >
                  <InsightCard
                    image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                    title={insight.title}
                    description={insight.description}
                    subtitle={subTitle}
                    path={`/insights/${insight.id}`}
                  />
                </div>
              )
            })}
          </div>
          {hasNextPage && (
            <div className="flex justify-center mt-64">
              <ButtonPrimary
                onClick={() => {
                  setPage(page + 1)
                }}
              >
                MORE
              </ButtonPrimary>
            </div>
          )}
        </div>
      </section>
    </section>
  )
}
