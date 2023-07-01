import ProjectHeroSection from "../../../../../ui/projectHeroSection";

const roleDetails = [
  {
    title: "YEAR",
    details: ["2021"],
  },
  {
    title: "ROLE",
    details: ["User Interface Design", "User Experience Design", "User Research"],
  },
  {
    title: "INDUSTRY",
    details: ["Logistics"],
  },
];

const EnvoyHeroSection = () => {
  return (
    <ProjectHeroSection
      projectImage="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685981720/portfolio-assets/envoy_fvs8mu.svg"
      projectName="Envoy"
      projectSummary="This case study is about how I designed a mobile application, Envoy, that provides an affordable and trusted errand and delivery service, solving issues such as ineffective payment systems and delayed deliveries, making users' lives a step closer to stress-free daily living. Read about my process below👇 "
      roleDetails={roleDetails}
      heroPreText="An Attempt to take Humans a step closer to stress-free daily living via Logistics"
    />
  );
};

export default EnvoyHeroSection;
