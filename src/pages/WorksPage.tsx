import Layout from "../components/layout";
import MeasuringOutcome from "../components/websiteSection/works/metaphi/metaphiBodySection/MeasuringOutcome";
import ProblemDefinition from "../components/websiteSection/works/metaphi/metaphiBodySection/ProblemDefinition";
import PushingPixels from "../components/websiteSection/works/metaphi/metaphiBodySection/PushingPixels";
import SolvingTheProblem from "../components/websiteSection/works/metaphi/metaphiBodySection/SolvingTheProblem";
import MetaphiHeroSection from "../components/websiteSection/works/metaphi/metaphiHeroSection";
import ProjectNavigation from "../ui/projectNavigation";
import { Card, InnerSection } from "../ui/styles";

const WorksPage = () => {
  return (
    <Layout>
      <MetaphiHeroSection />
      <InnerSection>
        <Card
          width="978px"
          mdwidth="100%"
          margin="0 auto"
          flex
          flexdirection="column"
          gap="40px"
        >
          <ProblemDefinition />
          <SolvingTheProblem />
          <PushingPixels />
          <MeasuringOutcome />
        </Card>
      </InnerSection>
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
