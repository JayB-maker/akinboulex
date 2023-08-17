import Layout from "../components/layout";
import CrypcentraHeroSection from "../components/websiteSection/works/crypcentra/crypcentraHeroSection";
import Background from "../components/websiteSection/works/crypcentra/cryptcentraBody/Background";
import Structure from "../components/websiteSection/works/crypcentra/cryptcentraBody/Structure";
import ProjectNavigation from "../ui/projectNavigation";
import { Card, InnerSection } from "../ui/styles";

const CrypcentraPage = () => {
  return (
    <Layout>
      <CrypcentraHeroSection />
      <InnerSection>
        <Card
          width="978px"
          mdwidth="100%"
          margin="0 auto"
          flex
          flexdirection="column"
          gap="72px"
        >
          <Background />
          <Structure />
        </Card>
      </InnerSection>
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
