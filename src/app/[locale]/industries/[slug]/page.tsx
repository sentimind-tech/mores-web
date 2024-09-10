import { PageHeader } from "@/components/PageHeader";
import { SectionDetail } from "@/components/SectionDetail";
import {
  ServiceDetailHeader,
  TServiceDetailHeaderMenuItem,
} from "@/components/ServiceDetailHeader";
import { getIndustryDetail } from "@/services/industry";
import { notFound } from "next/navigation";
import { customConfig } from "../../../../../config";
import { getInsightList, TInsightParams } from "@/services/insight";
import Layout from "@/components/Layout";

const menus: TServiceDetailHeaderMenuItem[] = [
  {
    name: "OVERVIEW",
    id: "overview",
  },
  {
    name: "OUR EXPERIENCE",
    id: "our-experience",
  },
  {
    name: "FEATURED INSIGHT",
    id: "featured-insight",
  },
];

export default async function IndustryDetail({ params }: any) {
  const industry = await getIndustryDetail(params.slug);
  if (!industry) notFound();

  // Fetch Insight
  const query: TInsightParams = {
    industryId: industry.id,
    isFeatured: true,
  };
  const insightsRes = await getInsightList(query, 1, 4);
  const insights = insightsRes?.items;

  // Initiate data
  const ourExperience = industry.our_experiences || [""];
  const ourExperiencePath = `${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${ourExperience[0]}`;

  const coverImage = industry.cover_image;
  const coverImagePath = `${customConfig.POCKETBASE_FILE_URL}/industries/${industry.id}/${coverImage}`;

  return (
    <Layout>
      <section className="flex flex-col">
        <section>
          <PageHeader
            background={coverImagePath}
            title="Transportation & Logistics"
            subtitle="FOCUS INDUSTRIES"
          />

          <div className="border-b border-gray-ash py-24 px-64">
            <ServiceDetailHeader
              title={industry.name}
              overview={industry.overview}
              ourExperience={ourExperiencePath}
              insights={insights || []}
            />
          </div>
        </section>

        <SectionDetail
          overview={industry.overview}
          ourExperience={ourExperiencePath}
          insights={insights || undefined}
        />
      </section>
    </Layout>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
