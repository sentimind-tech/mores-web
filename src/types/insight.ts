import { TIndustry } from './industry'
import { TResponsePaginationProps } from './common'
import { TService } from './service'

type TRelation = {
  industry_tags: TIndustry
  service_tags: TService
}
export type TInsight = {
  id: string
  title: string
  published: string
  read_time: string
  content: string
  description: string
  summary: string[]
  pdf_file: string
  button_image: string[]
  expand?: TRelation
  cover_image: string
}
