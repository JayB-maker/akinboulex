import Layout from "../components/layout";
import MetaphiHeroSection from "../components/websiteSection/works/metaphi/metaphiHeroSection";
import ProjectNavigation from "../ui/projectNavigation";

const WorksPage = () => {
  return (
    <Layout>
      <MetaphiHeroSection />
      <ProjectNavigation
        first
        nextPath="/kiwi"
        nextProject="Designing a hands-off crypto..."
        prevPath=""
      />
    </Layout>
  );
};

export default WorksPage;
