import Layout from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import JobList from "@/components/Section/Careers/JobList";
import ValueCard from "@/components/Section/Careers/ValueCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionInfo } from "@/components/SectionInfo";
import { Metadata } from "next";
import Image from "next/image";
import CareerSwiper from "@/components/Section/Careers/CareerSwiper";
import {
  getVacancyList,
  getVacancyListGroupedByField,
} from "@/services/vacancy";
import SectionHelp from "@/components/Section/SectionHelp";
import { SELECTED_MENU_CAREER } from "@/store/constants";
import { getGalleryWorkAtMores } from "@/services/gallery_work_at_mores";
import { getGalleryLifeAtMores } from "@/services/gallery_life_at_mores";
import { customConfig } from "../../../../config";

type Props = {
  params: { locale: string };
};
export default async function CareersPage({ params: { locale } }: Props) {
  const areaList = await getVacancyListGroupedByField("area");
  const jobList = await getVacancyList();

  const galleryWorkAtMoresList = await getGalleryWorkAtMores();
  const galleryLifeAtMoresList = await getGalleryLifeAtMores();

  let lifeImage1 = "/images/careers/careers_1.png";
  let lifeImage2 = "/images/careers/careers_2.png";
  let lifeImage3 = "/images/careers/careers_3.png";
  let lifeImage4 = "/images/careers/careers_4.png";
  let lifeImage5 = "/images/careers/careers_5.png";
  let lifeImage6 = "/images/careers/careers_6.png";
  let lifeImage7 = "/images/careers/careers_7.png";

  if (galleryLifeAtMoresList?.[0]) {
    const galleryLife = galleryLifeAtMoresList?.[0];
    lifeImage1 = `${customConfig.POCKETBASE_FILE_URL}/gallery_life_at_mores/${galleryLife.id}/${galleryLife.image}`;
  }
  if (galleryLifeAtMoresList?.[1]) {
    const galleryLife = galleryLifeAtMoresList?.[1];
    lifeImage2 = `${customConfig.POCKETBASE_FILE_URL}/gallery_life_at_mores/${galleryLife.id}/${galleryLife.image}`;
  }
  if (galleryLifeAtMoresList?.[2]) {
    const galleryLife = galleryLifeAtMoresList?.[2];
    lifeImage3 = `${customConfig.POCKETBASE_FILE_URL}/gallery_life_at_mores/${galleryLife.id}/${galleryLife.image}`;
  }
  if (galleryLifeAtMoresList?.[3]) {
    const galleryLife = galleryLifeAtMoresList?.[3];
    lifeImage4 = `${customConfig.POCKETBASE_FILE_URL}/gallery_life_at_mores/${galleryLife.id}/${galleryLife.image}`;
  }
  if (galleryLifeAtMoresList?.[4]) {
    const galleryLife = galleryLifeAtMoresList?.[4];
    lifeImage5 = `${customConfig.POCKETBASE_FILE_URL}/gallery_life_at_mores/${galleryLife.id}/${galleryLife.image}`;
  }
  if (galleryLifeAtMoresList?.[5]) {
    const galleryLife = galleryLifeAtMoresList?.[5];
    lifeImage6 = `${customConfig.POCKETBASE_FILE_URL}/gallery_life_at_mores/${galleryLife.id}/${galleryLife.image}`;
  }
  if (galleryLifeAtMoresList?.[6]) {
    const galleryLife = galleryLifeAtMoresList?.[6];
    lifeImage7 = `${customConfig.POCKETBASE_FILE_URL}/gallery_life_at_mores/${galleryLife.id}/${galleryLife.image}`;
  }

  return (
    <Layout selectedMenu={SELECTED_MENU_CAREER}>
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
            <JobList jobList={jobList || []} areaList={areaList || []} />
          </div>

          <div className="section-padding flex gap-24 items-center justify-center flex-col px-[115px]">
            <div className="text-center text-blue-pacific font-supplymono leading-[1.75rem] lg:leading-[2.5rem] text-18 lg:text-[1.75rem] uppercase">
              &quot;A picture is worth a thousand memories.&quot;
            </div>
            <div className="font-inter text-sm lg:leading-[1.75rem] lg:text-[1.125rem] text-center">
              At Mores, life is more than just work—it&apos;s about growth,
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
                <tbody>
                  <tr>
                    <td rowSpan={2}>
                      <Image
                        src={`${lifeImage1}`}
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
                        src={`${lifeImage2}`}
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
                        src={`${lifeImage3}`}
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
                        src={`${lifeImage4}`}
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
                        src={`${lifeImage5}`}
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
                        src={`${lifeImage6}`}
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
                        src={`${lifeImage7}`}
                        alt="Careers 7"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-full object-cover"
                        priority={true}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="mb-[143px] overflow-hidden">
          <div className="section-padding">
            <SectionHeader title="WORK AT MORES" />
          </div>
          <CareerSwiper images={galleryWorkAtMoresList} />
        </div>
      </section>
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Mores | Careers",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
