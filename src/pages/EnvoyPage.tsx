import Layout from "../components/layout";
import EnvoyHeroSection from "../components/websiteSection/works/envoy/envoyHeroSection";
import ProjectNavigation from "../ui/projectNavigation";

const EnvoyPage = () => {
  return (
    <Layout>
      <EnvoyHeroSection />
      <ProjectNavigation
        nextPath="/street-school"
        nextProject="Bridging the gap between students ..."
        prevPath="/crypcentra"
        prevProject="An end-to-end crypto research ..."
      />
    </Layout>
  );
};

export default EnvoyPage;
