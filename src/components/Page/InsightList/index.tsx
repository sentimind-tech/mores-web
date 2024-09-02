'use client'
import { InsightCard } from "@/components/InsightCard";
import { PageHeader } from "@/components/PageHeader";
import { getInsightList } from "@/services/insight";
import { TInsight } from "@/types/insight";
import { Option, Select } from "@material-tailwind/react";
import { ReactNode, useEffect, useState } from "react";
import { customConfig } from "../../../../config";
import { ButtonPrimary } from "@/components/Button";

export const InsightList = () => {
    const [insights, setInsights] = useState<TInsight[]>()
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(4)

    useEffect(() => {
        const fetchInsights = async () => {
            const insightsRes = await getInsightList({}, page, perPage)
            const data = insightsRes?.items || []
            const prevInsight = insights || []
            setInsights([...prevInsight, ...data])
        }
        fetchInsights()
    }, [page])

    return <section className="flex flex-col">
        <section>
            <PageHeader title="INSIGHT" background="/images/bg-insights.png" />
        </section>
        <section className="px-120 py-100 flex flex-col gap-48">
            <div>
                {/* FILTER */}


            </div>
            <div className="flex flex-col ">
                <h1 className="font-semibold text-2xl text-black font-inter pb-48">Most Recent Insights</h1>
                <div className="grid grid-cols-4 gap-24 -ml-24">
                    {insights?.map((insight, index) => {
                        const insightIndusties = insight.expand?.industry_tags || []
                        const subTitle =
                            insightIndusties.length > 0 ? insightIndusties[0].name : ''

                        // Change this if grid-cols-change ex: window.innerWidth >= 768 ? 5 : 4
                        let gridCols = 4
                        const isFirstRow = (index + 1) % gridCols == 1
                        return <div key={insight.id} className={`${!isFirstRow ? 'border-l border-gray-silver' : ''} pb-36 pl-24`}>
                            <InsightCard
                                image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                                title={insight.title}
                                description={insight.summary}
                                subtitle={subTitle}
                                path={`/insights/${insight.id}`} />
                        </div>
                    })}

                </div>
                <div className="flex justify-center mt-64"><ButtonPrimary onClick={() => { setPage(page + 1) }}>MORE</ButtonPrimary></div>
            </div>
        </section>
    </section>
}