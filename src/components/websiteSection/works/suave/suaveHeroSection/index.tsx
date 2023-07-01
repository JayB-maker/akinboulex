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
    details: ["Travel"],
  },
];

const SuaveHeroSection = () => {
  return (
    <ProjectHeroSection
      projectImage="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979396/portfolio-assets/suave_f7bdpp.svg"
      projectName="Suave"
      projectSummary=""
      roleDetails={roleDetails}
      heroPreText="Revolutionizing the art and act of trips and vacations planning"
    />
  );
};

export default SuaveHeroSection;
