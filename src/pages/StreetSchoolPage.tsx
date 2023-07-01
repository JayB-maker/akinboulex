import Layout from "../components/layout";
import StreetSchoolDescription from "../components/websiteSection/works/streetSchool/streetSchoolDescription";
import StreetSchoolHeroSection from "../components/websiteSection/works/streetSchool/streetSchoolHeroSection";
import ProjectNavigation from "../ui/projectNavigation";

const StreetSchoolPage = () => {
  return (
    <Layout>
      <StreetSchoolHeroSection />
      <StreetSchoolDescription />
      <ProjectNavigation
        nextPath="/trava"
        nextProject="Helping humans build wealth ..."
        prevPath="/envoy"
        prevProject="An Attempt to take Humans a step closer ..."
      />
    </Layout>
  );
};

export default StreetSchoolPage;
