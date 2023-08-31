import ProjectHeroSection from "../../../../../ui/projectHeroSection";
import KiwiHero from '../../../../../assets/kiwi-hero.svg'

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
      projectImage={KiwiHero}
      projectName="Kiwi"
      projectSummary="Through research, we identified two user groups to design for and through efficient strategy, designed a hands-off crypto investment platform which means users did not need to monitor or manage assets by themselves. Our biggest challenge was designing for both user groups. Read on to see how we tackled this!"
      roleDetails={roleDetails}
      heroPreText="Designing a hands-off crypto investment mobile app"
    />
  );
};

export default KiwiHeroSection;
