'use client'

import { SectionInfo } from '@/components/SectionInfo'
import { useTranslations } from 'next-intl'

const HeaderContent = () => {
  const t = useTranslations('IndustryPage')
  return (
    <section className="">
      <SectionInfo title={t('title')}>
        <div className="flex flex-col gap-48">
          <div className="font-semibold text-2xl font-inter text-black">
            {t('description_header')}
          </div>
          <p
            className="font-normal text-18 leading-[1.75rem] text-justify"
            dangerouslySetInnerHTML={{ __html: t.raw('description_content') }}
          ></p>
        </div>
      </SectionInfo>
    </section>
  )
}

export default HeaderContent
