import Layout from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { SectionInfo } from "@/components/SectionInfo";
import { HeadingText } from "@/components/Text";

export default async function Aboutpage() {
  return (
    <Layout>
      <section className="relative">
        <PageHeader
          background="images/thumb/thumb-bg-about.jpg"
          title="ABOUT MORES"
          overlay={true}
        />
      </section>
      <section className="pt-[6.688rem] px-16 pb-[6.25rem]">
        <div className=""></div>
        <SectionInfo
          title="MORES /ʼMÔRĀZʼ/"
          subtitle={
            <span className="font-medium">
              “The customs, values, and behaviors that are accepted by a
              particular group, culture, and community”
            </span>
          }
        >
          <div className="text-14 leading-[1.5rem]">
            <p className="font-semibold">
              Mores Strategics is a strategic consultant specializes in data
              analysis, technology, and ethnographic research. We work with
              tailored approach by establishing strong strategic partnership and
              adapting our framework to fit our client needs, goals, and
              capacity. We seek for creative strategy that is grounded in
              analytics and customs in the community
            </p>
            <br />
            <p className="">
              We believe that localʼs customs is a fundamental aspect in
              strategy development. Our strategic advice aims to bring
              long-lasting positive impact to stakeholders and the community,
              and sustains good relationship between all involved parties.
              Therefore, understanding localʼs perspective and behavior is at
              the forefront of our operation
            </p>
          </div>
        </SectionInfo>

        <div className="mt-[6.25rem] w-full max-w-[846px] mx-auto">
          <HeadingText type="h4" className="text-blue-pacific">
            Creative thinking is where the problem-solving began. Combined with
            a strong understanding of the real situation, reliable data, and
            viable methods, we can introduce a new strategy without disrupting
            the existing process.
          </HeadingText>
        </div>
      </section>
    </Layout>
  );
}
