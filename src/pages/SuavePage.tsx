import Layout from "../components/layout";
import SuaveHeroSection from "../components/websiteSection/works/suave/suaveHeroSection";
import ProjectNavigation from "../ui/projectNavigation";

const SuavePage = () => {
  return (
    <Layout>
      <SuaveHeroSection />
      <ProjectNavigation
        nextPath="/crypcentra"
        nextProject="An end-to-end crypto research ..."
        prevPath="/kiwi"
        prevProject="Designing a hands-off crypto ..."
      />
    </Layout>
  );
};

export default SuavePage;
