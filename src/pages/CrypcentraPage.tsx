import Layout from "../components/layout";
import CrypcentraHeroSection from "../components/websiteSection/works/crypcentra/crypcentraHeroSection";
import ProjectNavigation from "../ui/projectNavigation";

const CrypcentraPage = () => {
  return (
    <Layout>
      <CrypcentraHeroSection />
      <ProjectNavigation
        nextPath="/envoy"
        nextProject="An Attempt to take Humans a step closer to ..."
        prevPath="/suave"
        prevProject="Revolutionizing the art and act ..."
      />
    </Layout>
  );
};

export default CrypcentraPage;
