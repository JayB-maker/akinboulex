import Layout from "../components/layout";
import Collaborate from "../components/layout/footer/Collaborate";
import FeaturedProjects from "../components/websiteSection/home/featuredProjects";
import HomeHeroSection from "../components/websiteSection/home/homeHeroSection";
import Intro from "../components/websiteSection/home/intro";

const HomePage = () => {
  return (
    <Layout>
      <HomeHeroSection />
      <Intro />
      <Collaborate />
      <FeaturedProjects />
    </Layout>
  );
};

export default HomePage;
