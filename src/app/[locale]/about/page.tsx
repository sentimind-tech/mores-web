import Layout from "@/components/Layout";
import AboutIntro from "@/components/Section/AboutIntro";
import AboutTeam from "@/components/Section/AboutTeam";
import SectionHelp from "@/components/Section/SectionHelp";
import { getTeamsList } from "@/services/teams";

export default async function Aboutpage() {
  const teamData = await getTeamsList({
    sort: "created",
    expand: "industries_expertise,service_expertise",
  });

  return (
    <Layout>
      <AboutIntro />
      <AboutTeam list={teamData} />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link=""
      />
    </Layout>
  );
}
