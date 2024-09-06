import { pb } from '@/lib/pocketbase'
import { TService } from '@/types/service'

export type TServiceParams = {
  parentServiceId?: string
}
type TQueryParams = {
  sort: string
  filter?: string
}

async function getServiceList(params: TServiceParams = {}) {
  try {
    let queryParams: TQueryParams = {
      sort: '-created',
    }

    let filters: string[] = []

    if (params.parentServiceId) {
      filters.push(`parent_service_id = "${params.parentServiceId}"`)
    } else {
      filters.push(`parent_service_id = null`)
    }

    // Combine all filters into a single string using AND logic
    if (filters.length > 0) {
      queryParams.filter = filters.join(' && ')
    }

    let response = await pb
      .collection('services')
      .getFullList<TService>(queryParams)
    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

async function getServiceDetail(id: string) {
  try {
    let response = await pb.collection('services').getOne<TService>(id)

    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

async function getAllServices(options: RecordFullListOptions) {
  try {
    let response = await pb.collection('services').getFullList<TService>({
      sort: '-created',
    })

    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

export { getServiceList, getServiceDetail, getAllServices }
