import Layout from "@/components/Layout";
import AboutIntro from "@/components/Section/AboutIntro";
import AboutTeam from "@/components/Section/AboutTeam";
import SectionHelp from "@/components/Section/SectionHelp";
import { getTeamsList } from "@/services/teams";
import type { Metadata } from "next";
import { SELECTED_MENU_ABOUT } from "@/store/constants";

type Props = {
  params: { locale: string };
};

export default async function Aboutpage({ params: { locale } }: Props) {
  const teamData = await getTeamsList({
    sort: "created",
    expand: "industries_expertise,service_expertise",
  });

  return (
    <Layout selectedMenu={SELECTED_MENU_ABOUT}>
      <AboutIntro />
      <AboutTeam list={teamData} />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link={`/${locale}/contact`}
      />
    </Layout>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mores | About",
  };
}
