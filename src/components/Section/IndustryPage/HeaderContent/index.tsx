'use client'

import { SectionInfo } from '@/components/SectionInfo'
import { useTranslations } from 'next-intl'

const HeaderContent = () => {
  const t = useTranslations('IndustryPage')
  return (
    <section className="">
      <SectionInfo title={t('title')}>
        <div className="flex flex-col gap-16 mobile-min:gap-24 lg:gap-48">
          <div className="font-semibold text-lg mobile-min:text-xl lg:text-2xl font-inter text-black">
            {t('description_header')}
          </div>
          <p
            className="font-normal text-sm mobile-min:text-base lg:text-18 lg:leading-[1.75rem] text-left"
            dangerouslySetInnerHTML={{ __html: t.raw('description_content') }}
          ></p>
        </div>
      </SectionInfo>
    </section>
  )
}

export default HeaderContent
