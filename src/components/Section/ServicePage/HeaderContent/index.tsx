import { SectionInfo } from '@/components/SectionInfo'
import { useTranslations } from 'next-intl'

const HeaderContent = () => {
  const t = useTranslations('ServicePage')

  return (
    <section className="">
      <SectionInfo title={t('title')}>
        <p className="font-normal text-18 leading-[1.75rem] text-justify">
          {t('description')}
        </p>
      </SectionInfo>
    </section>
  )
}

export default HeaderContent
