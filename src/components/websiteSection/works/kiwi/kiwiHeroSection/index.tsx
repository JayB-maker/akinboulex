import ProjectHeroSection from "../../../../../ui/projectHeroSection";

const roleDetails = [
  {
    title: "YEAR",
    details: ["2021"],
  },
  {
    title: "ROLE",
    details: [
      "User Interface Design",
      "User Experience Design",
      "User Research",
      "Usability Testing",
    ],
  },
  {
    title: "INDUSTRY",
    details: ["Web3", "DeFi"],
  },
];

const KiwiHeroSection = () => {
  return (
    <ProjectHeroSection
      projectImage="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979287/portfolio-assets/kiwi_hbav73.svg"
      projectName="Kiwi"
      projectSummary="Through research, we identified two user groups to design for and through efficient strategy, designed a hands-off crypto investment platform which means users did not need to monitor or manage assets by themselves. Our biggest challenge was designing for both user groups. Read on to see how we tackled this!"
      roleDetails={roleDetails}
      heroPreText="Designing a hands-off crypto investment mobile app"
    />
  );
};

export default KiwiHeroSection;
