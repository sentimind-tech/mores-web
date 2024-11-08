import { ButtonPrimary } from "@/components/Button";
import CompanyInfoCard from "@/components/CompanyInfoCard";
import GoogleMap from "@/components/GoogleMap";
import Layout from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import ReachUsForm from "@/components/ReachUsForm";
import SectionHelp from "@/components/Section/SectionHelp";
import { SectionInfo } from "@/components/SectionInfo";
import { getConfigByKey } from "@/services/app_configs";
import {
  CONFIG_CONTACT_US_EMAIL,
  CONFIG_CONTACT_US_GOOGLE_MAP,
  CONFIG_CONTACT_US_INSTAGRAM,
  CONFIG_CONTACT_US_LINKEDIN,
  CONFIG_CONTACT_US_PHONE,
  CONFIG_CONTACT_US_WHATSAPP,
  CONFIG_CONTACT_US_X,
  CONFIG_CONTACT_US_YOUTUBE,
  CONFIG_CONTACT_US_WORKSHOP,
  CONFIG_CONTACT_US_OFFICE,
} from "@/store/constants";
import { Metadata } from "next";
import { SELECTED_MENU_CONTACT } from "@/store/constants";
import { TAddressConfig } from "@/types/app_config";
import he from "he";
import { BodyText } from "@/components/Text";

type Props = {
  params: { locale: string };
};

export default async function ContactUs({ params: { locale } }: Props) {
  const emailConfig = await getConfigByKey(CONFIG_CONTACT_US_EMAIL);
  const phoneConfig = await getConfigByKey(CONFIG_CONTACT_US_PHONE);
  const whatsappConfig = await getConfigByKey(CONFIG_CONTACT_US_WHATSAPP);
  const instagramConfig = await getConfigByKey(CONFIG_CONTACT_US_INSTAGRAM);

  const linkedInConfig = await getConfigByKey(CONFIG_CONTACT_US_LINKEDIN);
  const youtubeConfig = await getConfigByKey(CONFIG_CONTACT_US_YOUTUBE);
  const xConfig = await getConfigByKey(CONFIG_CONTACT_US_X);
  const googleMapConfig = await getConfigByKey(CONFIG_CONTACT_US_GOOGLE_MAP);

  const workshopConfig = (await getConfigByKey(
    CONFIG_CONTACT_US_WORKSHOP
  )) as unknown as TAddressConfig;

  const oficeConfig = (await getConfigByKey(
    CONFIG_CONTACT_US_OFFICE
  )) as unknown as TAddressConfig;

  return (
    <Layout selectedMenu={SELECTED_MENU_CONTACT}>
      <section className="flex flex-col">
        <PageHeader background="/images/bg-contact-us.png" title="CONTACT US" />
        <section className="section-padding flex flex-col">
          <div className="mb-[83px]">
            <SectionInfo title="Have a question? Need advice? Let's connect.">
              <p className="section-info-p">
                Whether you have a question about our consulting services, need
                advice, or just want to share your thoughts on our latest blog
                post, we&apos;re here to help. Our team experts is dedicated to
                providing insights and solutions tailored to your unique needs.
              </p>
            </SectionInfo>
          </div>
          <div className="mb-[71px]">
            <GoogleMap url={googleMapConfig?.value.url || ""} />
          </div>
          <div className="mb-[76px] grid grid-cols-2 gap-24 md:gap-72">
            {oficeConfig && (
              <CompanyInfoCard title="MORES STRATEGICS">
                <BodyText type="body3" className="">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: he.decode(oficeConfig.value.address),
                    }}
                  ></span>
                </BodyText>
              </CompanyInfoCard>
            )}
            {workshopConfig && (
              <CompanyInfoCard title="WORKSHOP">
                <BodyText type="body3" className="">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: he.decode(workshopConfig.value.address),
                    }}
                  ></span>
                </BodyText>
              </CompanyInfoCard>
            )}
          </div>
          <div className=" grid grid-cols-1 mobile-min:grid-cols-3 gap-48">
            <CompanyInfoCard
              title="EMAIL"
              icon="/images/icon/icon-email-blue.svg"
              footer={emailConfig?.value.title?.toLowerCase()}
              url={emailConfig?.value.url}
            >
              <BodyText type="body3">Take a bold step forward.</BodyText>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="PHONE"
              icon="/images/icon/icon-phone-blue.svg"
              footer={phoneConfig?.value.title}
              url={phoneConfig?.value.url}
            >
              <BodyText type="body3">
                For personalized service and detailed information, please
                contact our customer support
              </BodyText>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="WHATSAPP"
              icon="/images/icon/icon-whatsapp-blue.svg"
              footer={whatsappConfig?.value.title}
              url={whatsappConfig?.value.url}
            >
              <BodyText type="body3">
                For quick and convenient communication, please reach out to us
              </BodyText>
            </CompanyInfoCard>
          </div>
          <div className="mb-[102px] mt-[48px] grid grid-cols-1 mobile-min:grid-cols-3 lg:grid-cols-4 gap-48">
            <CompanyInfoCard
              title="INSTAGRAM"
              icon="/images/icon/icon-instagram-blue.svg"
              footer={instagramConfig?.value.title}
              url={instagramConfig?.value.url}
            >
              <BodyText type="body3">Take a bold step forward.</BodyText>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="LINKEDIN"
              icon="/images/icon/icon-linkedln-blue.svg"
              footer={linkedInConfig?.value.title}
              url={linkedInConfig?.value.url}
            >
              <BodyText type="body3">
                For personalized service and detailed information, please
                contact our customer support
              </BodyText>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="YOUTUBE"
              icon="/images/icon/icon-youtube-blue.svg"
              footer={youtubeConfig?.value.title}
              url={youtubeConfig?.value.url}
            >
              <BodyText type="body3">
                For quick and convenient communication, please reach out to us
              </BodyText>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="X"
              icon="/images/icon/icon-x-blue.svg"
              footer={xConfig?.value.title}
              url={xConfig?.value.url}
            >
              <BodyText type="body3">
                For quick and convenient communication, please reach out to us
              </BodyText>
            </CompanyInfoCard>
          </div>

          <ReachUsForm />
        </section>
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
  title: "Mores | Contact",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
