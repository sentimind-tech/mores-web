import Layout from "@/components/Layout";
import TechProfileContent from "@/components/Section/TechProfileContent";
import SectionHelp from "@/components/Section/SectionHelp";

const TechProfile = async () => {
  return (
    <Layout>
      <TechProfileContent />
      <SectionHelp
        title="Have questions or need assistance?"
        button_text="Contact Us"
        link=""
      />
    </Layout>
  );
};

export default TechProfile;
