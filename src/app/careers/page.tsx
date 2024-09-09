import ValueCard from '@/components/Careers/ValueCard'
import Layout from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { SectionInfo } from '@/components/SectionInfo'
import { Metadata } from 'next'

export default async function CareersPage({ params }: any) {
  return (
    <Layout>
      <section className="flex flex-col">
        <PageHeader background="/images/bg-careers.png" title="CAREERS" />
        <section className="px-120 py-100 flex flex-col">
          <SectionInfo title="JOBS">
            <p className="font-normal text-18 leading-[1.75rem] text-justify">
              At Mores Strategic, we don’t just solve business challenges — we
              create the future. If you have a passion for diving into data,
              crafting innovative strategies, and achieving exceptional results,
              our place is your home.
            </p>
          </SectionInfo>
          <div className="mt-[61px] mb-[87px] grid grid-cols-4 gap-50">
            <ValueCard
              title="Advance Your Career"
              description="We believe that personal and professional growth are the keys to our collective success. Here, you will have the opportunity to lead challenging projects, acquire new skills, and reach your full potential."
            />
            <ValueCard
              title="Collaborative Environment"
              description="We are a team that supports each other. At Mores Strategics, every idea is valued, and every voice is heard. Through close collaboration, we combine our strengths to achieve the best possible outcomes."
            />
            <ValueCard
              title="Innovation"
              description="The challenges we face often require creative and out-of-the-box solutions. If you have a passion for thinking differently and making a real impact, this is the place where your innovation can thrive."
            />
            <ValueCard
              title="Work-Life Balance"
              description="We understand the importance of balancing work and personal life. With the flexibility and support we offer, you can achieve success at work without sacrificing valuable time with family and friends."
            />
          </div>
          <SectionInfo title="CAREER OPPORTUNITIES">
            <p className="font-normal text-18 leading-[1.75rem] text-justify">
              Are you a strategic thinker, a data analysis expert, or a
              visionary innovator? We offer a range of challenging and rewarding
              positions that might be the perfect fit for you. Explore the
              opportunities available and find a role that aligns with your
              skills and aspirations.
            </p>
          </SectionInfo>
        </section>
      </section>
    </Layout>
  )
}

export const metadata: Metadata = {
  title: 'Mores | Industries',
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
