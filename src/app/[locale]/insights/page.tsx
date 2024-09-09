import React, { useEffect, useState } from 'react'
import { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { getInsightList } from '@/services/insight'
import { ButtonPrimary } from '@/components/Button'
import { InsightCard } from '@/components/InsightCard'
import { customConfig } from '../../../config'
import { InsightList } from '@/components/InsightList'
import Layout from '@/components/Layout'

export default async function Insight({ params }: any) {
  return (
    <Layout>
      <InsightList />
    </Layout>
  )
}

export const metadata: Metadata = {
  title: 'Mores | Under Construction',
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
