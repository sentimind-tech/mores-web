import { PageHeader } from "@/components/PageHeader";
import {
  getInsightDetail,
  getInsightList,
  TInsightParams,
} from "@/services/insight";
import { notFound } from "next/navigation";
import { customConfig } from "../../../../../config";
import Layout from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { InsightCard } from "@/components/InsightCard";
import Link from "next/link";
import { formatDate } from "@/module/helper";
import Image from "next/image";
import { InsightAction } from "@/components/InsightAction";

export default async function InsightDetail({ params }: any) {
  const insight = await getInsightDetail(params.slug);
  if (!insight) notFound();

  //   Fetch NEXT Insight
  const query: TInsightParams = {
    industryId: insight.expand?.industry_tags?.id,
    serviceId: insight.expand?.service_tags?.id,
    insightId: insight.id,
  };
  const nextInsightRes = await getInsightList(query, 1, 4);
  const nextInsights = nextInsightRes?.items || [];

  // Initiate data
  const coverImage = insight.cover_image;
  const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${coverImage}`;

  const pageSubtitle = insight?.expand?.industry_tags
    ? "INSIGHT/INDUSTRIES/" + insight?.expand?.industry_tags.name.toUpperCase()
    : "INSIGHT/SERVICES/" + insight?.expand?.service_tags?.name.toUpperCase();

  const authors = insight.expand?.authors || [];
  return (
    <Layout>
      <section className="flex flex-col gap-72 text-inter">
        <section>
          <PageHeader
            background={coverImagePath}
            title="Transportation & Logistics"
            subtitle={pageSubtitle}
            subtitleCustomClass="text-white"
          />
        </section>
        <section className="flex flex-col gap-72 px-120 pb-120">
          <div className="flex justify-between">
            <div className="flex gap-32">
              <div className="max-w-[274px] leading-[14.52px] text-12">
                By&nbsp;
                {authors.map((author, index) => (
                  <span key={author.name}>
                    <Link
                      href={author.url}
                      target="_blank"
                      className="underline"
                      rel="noopener noreferrer"
                    >
                      {author.name}
                    </Link>
                    {index < authors.length - 1 && ", "}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2 leading-[14.52px] text-12 ">
                <div className="">{formatDate(insight.published)}</div>
                <div className="text-blue-pacific ">
                  {insight.read_time} Min Read
                </div>
              </div>
            </div>
            <InsightAction insight={insight} />
          </div>
          <section className="flex flex-col gap-36 text-inter text-14 leading-[22px]">
            <div
              className="insight-detail"
              dangerouslySetInnerHTML={{ __html: insight.content }}
            ></div>
            <div className="flex flex-col gap-48 text-20 leading-[24px]">
              <div className="font-semibold ">At a Glance</div>
              <div className="flex flex-col gap-24">
                {insight.summary.map((summary, index) => {
                  return (
                    <div
                      key={`insight-${insight.id}-summary-${index}`}
                      className="flex items-start gap-20"
                    >
                      <div>
                        <Image
                          width={24}
                          height={24}
                          src={"/images/icon/triangle.png"}
                          alt="list"
                        />
                      </div>
                      <div className="">{summary}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section id="featured-insight" className="flex flex-col gap-50">
            <SectionHeader title="NEXT INSIGHTS" />
            <div className="grid grid-cols-4 gap-50">
              {nextInsights.map((insight) => {
                let subTitle = "";
                if (insight?.expand?.industry_tags) {
                  subTitle = insight.expand?.industry_tags?.name;
                } else if (insight?.expand?.service_tags) {
                  subTitle = insight.expand?.service_tags?.name;
                }
                return (
                  <InsightCard
                    key={insight.id}
                    image={`${customConfig.POCKETBASE_FILE_URL}/insights/${insight.id}/${insight.button_image}`}
                    title={insight.title}
                    description={insight.description}
                    subtitle={subTitle}
                    path={`/insights/${insight.id}`}
                  />
                );
              })}
            </div>
          </section>
        </section>
      </section>
    </Layout>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
