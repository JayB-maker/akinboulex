import Layout from "../components/layout";
import TravaDescription from "../components/websiteSection/works/trava/travaDescription";
import TravaHeroSection from "../components/websiteSection/works/trava/travaHeroSection";
import ProjectNavigation from "../ui/projectNavigation";

const TravaPage = () => {
  return (
    <Layout>
      <TravaHeroSection />
      <TravaDescription />
      <ProjectNavigation
        last
        nextPath=""
        prevPath="/street-school"
        prevProject="Bridging the gap between students, sch..."
      />
    </Layout>
  );
};

export default TravaPage;
