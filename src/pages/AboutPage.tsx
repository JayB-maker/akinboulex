import Layout from "../components/layout";
import AboutHeroSection from "../components/websiteSection/about/aboutHeroSection";
import AboutImages from "../components/websiteSection/about/aboutImages";
import AboutSection from "../components/websiteSection/about/aboutSection";

const AboutPage = () => {
  return (
    <Layout>
      <AboutHeroSection />
      <AboutSection />
      <AboutImages />
    </Layout>
  );
};

export default AboutPage;
