import { pb } from '@/lib/pocketbase'
import { TService } from '@/types/service'
import { RecordFullListOptions } from 'pocketbase'

export type TServiceParams = {
  parentServiceId?: string
  isAll?: boolean
  keyword?: string
}
type TQueryParams = {
  sort: string
  filter?: string
  requestKey: null
}

async function getServiceList(params: TServiceParams = {}) {
  try {
    let queryParams: TQueryParams = {
      sort: 'name',
      requestKey: null,
    }

    let filters: string[] = []

    if (params.parentServiceId) {
      filters.push(`parent_service_id = "${params.parentServiceId}"`)
    }

    if (!params.isAll && !params.parentServiceId) {
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
  pb.autoCancellation(false)
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

async function getServiceListPagination(
  params: { keyword?: string; sortBy?: string } = {},
  page: number = 1,
  perPage: number = 10
) {
  try {
    let queryParams: TQueryParams = {
      sort: '-created',
      requestKey: null,
    }
    if (params.sortBy && params.sortBy == 'oldest') {
      queryParams.sort = 'created'
    }

    let filters: string[] = []

    if (params.keyword) {
      filters.push(`name ~ "${params.keyword}"`)
    }

    // Combine all filters into a single string using AND logic
    if (filters.length > 0) {
      queryParams.filter = filters.join(' && ')
    }

    let response = await pb
      .collection('services')
      .getList<TService>(page, perPage, queryParams)

    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

export {
  getServiceList,
  getServiceDetail,
  getAllServices,
  getServiceListPagination,
}
