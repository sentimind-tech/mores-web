import { pb } from '@/lib/pocketbase'
import { TAppConfig } from '@/types/app_config'
import { TService } from '@/types/service'
import { RecordFullListOptions } from 'pocketbase'

async function getConfigByKey(key: string) {
  try {
    const response = await pb
      .collection('app_configs')
      .getList<TAppConfig>(1, 1, {
        filter: `key="${key}"`,
      })

    // Check if the record is found
    if (response.items.length > 0) {
      return response.items[0] // Return the first matched record
    } else {
      return null // No record found
    }
  } catch (error) {
    console.log(error)
    return null // Return null on error
  }
}

export { getConfigByKey }
