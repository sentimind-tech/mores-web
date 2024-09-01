import { pb } from '@/lib/pocketbase'
import { TInsight } from '@/types/insight'

export type TInsightParams = {
  industryId?: string
  serviceId?: string
}

type TQueryParams = {
  sort: string
  filter?: string
  expand?: string
}

async function getInsightList(params: TInsightParams = {}) {
  try {
    let queryParams: TQueryParams = {
      sort: '-created',
    }
    if (params.industryId) {
      queryParams.filter = `industry_tags ~ "${params.industryId}"`
    }
    if (params.serviceId) {
      queryParams.filter = `service_tags ~ "${params.serviceId}"`
    }

    queryParams.expand = 'industry_tags'

    let response = await pb
      .collection('insights')
      .getFullList<TInsight>(queryParams)
    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

async function getInsightDetail(id: string) {
  try {
    let response = await pb.collection('insights').getOne<TInsight>(id)

    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

export { getInsightList, getInsightDetail }
