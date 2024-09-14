import React, { useEffect, useState } from 'react'
import { Metadata } from 'next'
import { SectionHeader } from '@/components/SectionHeader'
import { ServiceCard } from '@/components/ServiceCard'
import { PageHeader } from '@/components/PageHeader'
import { SectionInfo } from '@/components/SectionInfo'
import { TIndustry } from '@/types/industry'
import { getIndustryList } from '@/services/industry'
import Layout from '@/components/Layout'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import IndustryList from '@/components/Section/IndustryPage/IndustryList'

type Props = {
  params: { locale: string }
}

export default async function Industry({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const industryList = await getIndustryList()
  return (
    <Layout>
      <section className="flex flex-col">
        <section>
          <PageHeader background="/images/bg-industries.png" />
        </section>
        <IndustryList industryList={industryList || []} />
      </section>
    </Layout>
  )
}

export const metadata: Metadata = {
  title: 'Mores | Industries',
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
