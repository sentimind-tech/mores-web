import Layout from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import JobList from '@/components/Section/Careers/JobList'
import ValueCard from '@/components/Section/Careers/ValueCard'
import { SectionHeader } from '@/components/SectionHeader'
import { SectionInfo } from '@/components/SectionInfo'
import { Metadata } from 'next'
import Image from 'next/image'
import CareerSwiper from '@/components/Section/Careers/CareerSwiper'

export default async function CareersPage({ params }: any) {
  return (
    <Layout>
      <section className="flex flex-col">
        <PageHeader background="/images/bg-careers.png" title="CAREERS" />
        <section className="section-padding flex flex-col">
          <SectionInfo title="JOBS">
            <p className="section-info-p">
              At Mores Strategic, we don’t just solve business challenges — we
              create the future. If you have a passion for diving into data,
              crafting innovative strategies, and achieving exceptional results,
              our place is your home.
            </p>
          </SectionInfo>
          <div className="mt-32 mb-48 lg:mt-[61px] lg:mb-[87px] grid grid-cols-1 mobile-min:grid-cols-2 lg:grid-cols-4 gap-20 mobile-min:gap-32 lg:gap-50">
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
            <p className="section-info-p">
              Are you a strategic thinker, a data analysis expert, or a
              visionary innovator? We offer a range of challenging and rewarding
              positions that might be the perfect fit for you. Explore the
              opportunities available and find a role that aligns with your
              skills and aspirations.
            </p>
          </SectionInfo>

          <div className="mt-50 lg:mt-100">
            <JobList />
          </div>

          <div className="section-padding flex gap-24 items-center justify-center flex-col px-[115px]">
            <div className="text-center text-blue-pacific font-supplymono leading-[1.75rem] lg:leading-[2.5rem] text-18 lg:text-[1.75rem]">
              "A picture is worth a thousand memories."
            </div>
            <div className="font-inter text-sm lg:leading-[1.75rem] lg:text-[1.125rem] text-center">
              At Mores, life is more than just work—it's about growth,
              collaboration, and making a meaningful impact. We believe that a
              thriving work environment is built on the foundation of mutual
              respect, creativity, and a shared passion for excellence. Here,
              every day is an opportunity to learn something new, to challenge
              yourself, and to contribute to something bigger.
            </div>
          </div>

          <div>
            <SectionHeader title="LIFE AT MORES" />
            <div className="w-full">
              <table className="w-full border-separate careers-image-table h-[511px] mt-[32px]">
                <tr>
                  <td rowSpan={2}>
                    <Image
                      src="/images/careers/careers_1.png"
                      alt="Careers 1"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/careers/careers_2.png"
                      alt="Careers 2"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/careers/careers_3.png"
                      alt="Careers 3"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src="/images/careers/careers_4.png"
                      alt="Careers 4"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </td>
                  <td rowSpan={2}>
                    <Image
                      src="/images/careers/careers_5.png"
                      alt="Careers 5"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Image
                      src="/images/careers/careers_6.png"
                      alt="Careers 6"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/careers/careers_7.png"
                      alt="Careers 7"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                      priority={true}
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>
        <div className="mb-[143px]">
          <div className="section-padding">
            <SectionHeader title="WORK AT MORES" />
          </div>
          <CareerSwiper />
        </div>
      </section>
    </Layout>
  )
}

export const metadata: Metadata = {
  title: 'Mores | Industries',
}

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
