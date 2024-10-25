'use client'

import { SectionHeader } from '@/components/SectionHeader'
import HeaderContent from '../HeaderContent'
import { TIndustry } from '@/types/industry'
import { ServiceCard } from '@/components/ServiceCard'
import { useTranslations } from 'next-intl'

type TIndustryListProp = {
  industryList: TIndustry[]
}
const IndustryList = ({ industryList }: TIndustryListProp) => {
  const t = useTranslations('IndustryPage')

  return (
    <section className="section-padding flex flex-col gap-32 lg:gap-100">
      <HeaderContent />
      <section className="section-header-container">
        <SectionHeader title={t('list_title')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-50">
          {industryList &&
            industryList.map((industry) => (
              <ServiceCard
                key={industry.id}
                title={industry.name}
                description={industry.description}
                path={`/industries/${industry.id}`}
              />
            ))}
        </div>
      </section>
    </section>
  )
}

export default IndustryList
