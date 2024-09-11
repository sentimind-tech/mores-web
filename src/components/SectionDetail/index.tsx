import { ReactNode } from 'react'
import { SectionHeader } from '../SectionHeader'
import Image from 'next/image'
import { TInsight } from '@/types/insight'
import { InsightCard } from '../InsightCard'
import { customConfig } from '../../../config'
import { TService } from '@/types/service'
import { ServiceCard } from '../ServiceCard'
import { useLocale } from 'next-intl'

type TSectionDetailProp = {
  overview?: string
  ourExperience?: string
  insights?: TInsight[]
  services?: TService[]
}
export const SectionDetail = ({
  overview,
  ourExperience,
  insights,
  services,
}: TSectionDetailProp) => {
  const localActive = useLocale()

  return (
    <section id="" className="px-120 py-100 flex flex-col gap-100">
      {overview && (
        <section id="overview" className="">
          <div dangerouslySetInnerHTML={{ __html: overview }}></div>
        </section>
      )}

      {services && services.length > 0 && (
        <section id="what-we-offer" className="flex flex-col gap-50">
          <SectionHeader title="WHAT WE OFFER" />
          <div className="grid grid-cols-3 gap-50">
            {services.map((service) => {
              const path = service.parent_service_id
                ? `/${localActive}/services/${service.parent_service_id}/${service.id}`
                : `/${localActive}/services/${service.id}`
              return (
                <ServiceCard
                  key={service.id}
                  title={service.name}
                  description={service.description}
                  path={path}
                />
              )
            })}
          </div>
        </section>
      )}

      {ourExperience && (
        <section id="our-experience" className="flex flex-col gap-50">
          <SectionHeader title="OUR EXPERIENCES" />
          <Image
            src={ourExperience}
            alt="OUR EXPERIENCES IMAGES"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            priority={true}
          />
        </section>
      )}

      {insights && insights.length > 0 && (
        <section id="featured-insight" className="flex flex-col gap-50">
          <SectionHeader title="FEATURED INSIGHTS" />
          <div className="grid grid-cols-4 gap-50">
            {insights.map((insight) => {
              let subTitle = ''
              if (insight?.expand?.industry_tags) {
                subTitle = insight.expand?.industry_tags?.name
              } else if (insight?.expand?.service_tags) {
                subTitle = insight.expand?.service_tags?.name
              }
              return (
                <InsightCard
                  key={insight.id}
                  image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                  title={insight.title}
                  description={insight.description}
                  subtitle={subTitle}
                  path={`/${localActive}/insights/${insight.id}`}
                />
              )
            })}
          </div>
        </section>
      )}
    </section>
  )
}
