import { pb } from '@/lib/pocketbase'
import { TVacancy } from '@/types/vacancy'

export type TVacancyParams = {
  area?: string
}

type TQueryParams = {
  sort: string
  filter?: string
  fields?: string
}

async function getVacancyList(params: TVacancyParams = {}) {
  try {
    let queryParams: TQueryParams = {
      sort: '-created',
    }
    let filters: string[] = []
    if (params.area) {
      filters.push(`area = "${params.area}"`)
    }

    // Combine all filters into a single string using AND logic
    if (filters.length > 0) {
      queryParams.filter = filters.join(' && ')
    }

    let response = await pb
      .collection('vacancies')
      .getFullList<TVacancy>(200, queryParams) // 200 is the maximum batch size

    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

async function getVacancyDetail(id: string) {
  try {
    let response = await pb.collection('vacancies').getOne<TVacancy>(id)
    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}
async function getVacancyListGroupedByField(key: keyof TVacancy) {
  try {
    let queryParams: TQueryParams = {
      sort: '-created',
      filter: 'active=true',
      fields: `${key},active`, // Select only necessary fields
    }
    let response = await pb
      .collection('vacancies')
      .getFullList<TVacancy>(queryParams)
    // Grouping logic
    const fieldGroup = response.reduce((acc, vacancy) => {
      if (vacancy.active) {
        const fieldValue = String(vacancy[key]) // Convert the dynamic field value to string

        if (!acc[fieldValue]) {
          acc[fieldValue] = [] // Initialize the group if it doesn't exist
        }

        acc[fieldValue].push(vacancy) // Push the vacancy into the group
      }

      return acc
    }, {} as Record<string, TVacancy[]>) // Record<string, TVacancy[]> is a dictionary where keys are strings

    return Object.keys(fieldGroup)
  } catch (error) {
    console.log(error)
    return null // Return null on error
  }
}

export { getVacancyList, getVacancyDetail, getVacancyListGroupedByField }
