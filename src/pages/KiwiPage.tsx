import Layout from "../components/layout";
import Conclusion from "../components/websiteSection/works/kiwi/kiwiBodySection/Conclusion";
import Controversy from "../components/websiteSection/works/kiwi/kiwiBodySection/Controversy";
import DesigningFeatures from "../components/websiteSection/works/kiwi/kiwiBodySection/DesigningFeatures";
import MiddleGround from "../components/websiteSection/works/kiwi/kiwiBodySection/MiddleGround";
import SaveTime from "../components/websiteSection/works/kiwi/kiwiBodySection/SaveTime";
import TalkingToUser from "../components/websiteSection/works/kiwi/kiwiBodySection/TalkingToUser";
import KiwiHeroSection from "../components/websiteSection/works/kiwi/kiwiHeroSection";
import ProjectNavigation from "../ui/projectNavigation";
import { Card, InnerSection } from "../ui/styles";

const KiwiPage = () => {
  return (
    <Layout>
      <KiwiHeroSection />
      <InnerSection>
        <Card
          width="978px"
          mdwidth="100%"
          margin="0 auto"
          flex
          flexdirection="column"
          gap="40px"
        >
          <Controversy />
          <TalkingToUser />
          <MiddleGround />
          <SaveTime />
          <DesigningFeatures />
          <Conclusion />
        </Card>
      </InnerSection>
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
