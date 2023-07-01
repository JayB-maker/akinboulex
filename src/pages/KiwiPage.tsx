import Layout from "../components/layout";
import KiwiHeroSection from "../components/websiteSection/works/kiwi/kiwiHeroSection";
import ProjectNavigation from "../ui/projectNavigation";

const KiwiPage = () => {
  return (
    <Layout>
      <KiwiHeroSection />
      <ProjectNavigation
        nextPath="/suave"
        nextProject="Revolutionizing the art and act ..."
        prevPath="/works"
        prevProject="Reducing drop-off rates through ..."
      />
    </Layout>
  );
};

export default KiwiPage;
