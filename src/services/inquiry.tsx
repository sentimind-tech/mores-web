import { pb } from '@/lib/pocketbase'
import { TInquiry } from '@/types/inquiry'

async function storeInquiry(insight: TInquiry) {
  try {
    const response = await pb.collection('inquiry').create<TInquiry>(insight)
    return response
  } catch (error) {
    console.log(error)
    return null // Return empty on error
  }
}

export { storeInquiry }
