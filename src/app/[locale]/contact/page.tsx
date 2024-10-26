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
} from "@/store/constants";
import { Metadata } from "next";
import { SELECTED_MENU_CONTACT } from "@/store/constants";

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
          <div className="mb-[76px] grid grid-cols-2 gap-72">
            <CompanyInfoCard title="Mores Strategics">
              <p>
                Gondangdia Lama 25 Building
                <br />
                Lt. 3A Unit A-B
                <br />
                Jl. RP. Soeroso No.25
                <br />
                Jakarta 10330 - Indonesia
              </p>
            </CompanyInfoCard>
            <CompanyInfoCard title="WORKSHOP">
              <p>
                At Braga Tech Office
                <br />
                Jl. Cilaki No. 23, Bandung Wetan
                <br />
                Bandung City 40114 - Indonesia
              </p>
            </CompanyInfoCard>
          </div>
          <div className=" grid grid-cols-1 mobile-min:grid-cols-3 gap-48">
            <CompanyInfoCard
              title="EMAIL"
              icon="/images/icon/email_icon.png"
              footer={emailConfig?.value.title}
              url={emailConfig?.value.url}
            >
              <p>Take a bold step forward.</p>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="PHONE"
              icon="/images/icon/phone_icon.png"
              footer={phoneConfig?.value.title}
              url={phoneConfig?.value.url}
            >
              <p>
                For personalized service and detailed information, please
                contact our customer support
              </p>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="WHATSAPP"
              icon="/images/icon/whatsapp_icon.png"
              footer={whatsappConfig?.value.title}
              url={whatsappConfig?.value.url}
            >
              <p>
                For quick and convenient communication, please reach out to us
              </p>
            </CompanyInfoCard>
          </div>
          <div className="mb-[102px] mt-[48px] grid grid-cols-1 mobile-min:grid-cols-3 lg:grid-cols-4 gap-48">
            <CompanyInfoCard
              title="INSTAGRAM"
              icon="/images/icon/instagram_icon.png"
              footer={instagramConfig?.value.title}
              url={instagramConfig?.value.url}
            >
              <p>
                For quick and convenient communication, please reach out to us
              </p>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="LINKEDIN"
              icon="/images/icon/linkedin_icon.png"
              footer={linkedInConfig?.value.title}
              url={linkedInConfig?.value.url}
            >
              <p>Take a bold step forward.</p>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="YOUTUBE"
              icon="/images/icon/youtube_icon.png"
              footer={youtubeConfig?.value.title}
              url={youtubeConfig?.value.url}
            >
              <p>
                For personalized service and detailed information, please
                contact our customer support
              </p>
            </CompanyInfoCard>
            <CompanyInfoCard
              title="X"
              icon="/images/icon/x_icon.png"
              footer={xConfig?.value.title}
              url={xConfig?.value.url}
            >
              <p>
                For quick and convenient communication, please reach out to us
              </p>
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
  title: "Mores | Industries",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
