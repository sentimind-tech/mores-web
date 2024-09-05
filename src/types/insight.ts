import { TIndustry } from './industry'

type TRelation = {
  industry_tags: TIndustry[]
}
export type TInsight = {
  id: string
  title: string
  published_date: string
  read_time: string
  content: string
  description: string
  summary: string[]
  pdf_file: string
  button_image: string[]
  expand?: TRelation
}
