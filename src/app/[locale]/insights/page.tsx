import React, { useEffect, useState } from 'react'
import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { getInsightList } from '@/services/insight'
import { ButtonPrimary } from '@/components/Button'
import { InsightCard } from '@/components/InsightCard'
import { customConfig } from '../../../../config'
import { InsightList } from '@/components/InsightList'
import Layout from '@/components/Layout'
import SectionHelp from '@/components/Section/SectionHelp'
import HeaderContent from '@/components/Section/InsightPage/HeaderContent'

type Props = {
  params: {
    locale: string
    slug: string
  }
}

export default async function Insight({ params: { locale, slug } }: Props) {
  return (
    <Layout>
      <div className="mb-[76px]">
        <InsightList />
      </div>
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  )
}

export const metadata: Metadata = {
  title: 'Mores | Under Construction',
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
