import ProjectHeroSection from "../../../../../ui/projectHeroSection";

const roleDetails = [
  {
    title: "YEAR",
    details: ["2021"],
  },
  {
    title: "ROLE",
    details: ["User Interface Design", "User Experience Design"],
  },
  {
    title: "INDUSTRY",
    details: ["Logistics"],
  },
];

const TravaHeroSection = () => {
  return (
    <ProjectHeroSection
      projectImage="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979323/portfolio-assets/trava_bviqol.svg"
      projectName="Trava"
      projectSummary="Trava - a platform that allows travelers to earn extra income by delivering packages to people at their destination while also providing a reliable delivery service."
      roleDetails={roleDetails}
      heroPreText="Helping humans build wealth through logistics"
    />
  );
};

export default TravaHeroSection;
