import React from 'react'
import { Metadata } from 'next'

import { ServiceValueCard } from '@/components/ServiceValueCard'
import { PageHeader } from '@/components/PageHeader'
import { SectionInfo } from '@/components/SectionInfo'
import { SectionDetail } from '@/components/SectionDetail'
import { getServiceList } from '@/services/service'
import Layout from '@/components/Layout'
import { unstable_setRequestLocale } from 'next-intl/server'
import HeaderContent from '@/components/Section/ServicePage/HeaderContent'
import ServiceValues from '@/components/Section/ServicePage/ServiceValues'
import SectionHelp from '@/components/Section/SectionHelp'

type Props = {
  params: { locale: string }
}

export default async function Services({ params: { locale } }: Props) {
  const serviceList = await getServiceList()
  unstable_setRequestLocale(locale)

  return (
    <Layout>
      <section className="flex flex-col mb-[76px]">
        <section>
          <PageHeader background="/images/bg-services.png" />
        </section>
        <section className="section-padding flex flex-col gap-32 lg:gap-100">
          <HeaderContent />
          <ServiceValues />
        </section>
        <SectionDetail services={serviceList || undefined} />
      </section>
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link="/contact"
      />
    </Layout>
  )
}

export const metadata: Metadata = {
  title: 'Mores | Services',
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
