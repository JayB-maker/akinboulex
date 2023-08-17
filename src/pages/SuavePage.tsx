import Layout from "../components/layout";
import ExperiencingSuave from "../components/websiteSection/works/suave/suaveBodySection/ExperiencingSuave";
import ProblemIdentifying from "../components/websiteSection/works/suave/suaveBodySection/ProblemIdentifying";
import ProblemStatement from "../components/websiteSection/works/suave/suaveBodySection/ProblemStatement";
import TheSolution from "../components/websiteSection/works/suave/suaveBodySection/TheSolution";
import SuaveHeroSection from "../components/websiteSection/works/suave/suaveHeroSection";
import ProjectNavigation from "../ui/projectNavigation";
import { Card, InnerSection } from "../ui/styles";

const SuavePage = () => {
  return (
    <Layout>
      <SuaveHeroSection />
      <InnerSection>
        <Card
          width="978px"
          mdwidth="100%"
          margin="0 auto"
          flex
          flexdirection="column"
          gap="40px"
        >
          <ProblemStatement />
          <ProblemIdentifying />
          <TheSolution />
          <ExperiencingSuave />
        </Card>
      </InnerSection>
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
