import { PageHeader } from "@/components/PageHeader"
import { getInsightDetail, getInsightList, TInsightParams } from "@/services/insight"
import { notFound } from "next/navigation"
import { customConfig } from "../../../../config"


export default async function InsightDetail({ params }: any) {
    const insight = await getInsightDetail(params.slug)
    if (!insight) notFound()

    // Fetch Insight
    // const query: TInsightParams = {
    //     industryId: industry.id,
    //     isFeatured: true
    // }
    // const nextInsightRes = await getInsightList(query, 1, 4)
    // const nextInsights = nextInsightRes?.items

    // Initiate data
    // const coverImage = insight.cover_image
    // const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${coverImage}`
    const coverImagePath = '/images/bg-insight-detail'
    return <section className="flex flex-col">
        <section>
            <PageHeader
                background={coverImagePath}
                title="Transportation & Logistics"
                subtitle="FOCUS INDUSTRIES"
            />
            <div className="border-b border-gray-ash py-24 px-64">

            </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: insight.content }}></div>
        <div>
            <div>At a Glance</div>
            <div className="flex flex-col gap-50">
                {insight.summary.map((summary, index) => {
                    return <div key={`insight-${insight.id}-summary-${index}`} className="flex items-start">
                        <div></div>
                        <div>{summary}</div>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'