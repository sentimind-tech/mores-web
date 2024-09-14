import Layout from "@/components/Layout";
import AboutIntro from "@/components/Section/AboutIntro";
import AboutTeam from "@/components/Section/AboutTeam";
import SectionHelp from "@/components/Section/SectionHelp";

export default async function Aboutpage() {
  return (
    <Layout>
      <AboutIntro />
      <AboutTeam />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link=""
      />
    </Layout>
  );
}
