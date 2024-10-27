import { pb } from '@/lib/pocketbase'
import { TGalleryLifeAtMores } from '@/types/gallery_life_at_mores'
import { TGalleryWorkLifeAtMores } from '@/types/gallery_work_at_mores'
import { TService } from '@/types/service'
import { RecordFullListOptions } from 'pocketbase'

async function getGalleryWorkAtMores() {
  try {
    let response = await pb
      .collection('gallery_work_at_mores')
      .getFullList<TGalleryWorkLifeAtMores>({
        sort: 'order',
      })
    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

export { getGalleryWorkAtMores }
