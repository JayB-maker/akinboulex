import ProjectHeroSection from "../../../../../ui/projectHeroSection";
import MetaPhiHero from '../../../../../assets/metaphi-hero.svg';

const roleDetails = [
  {
    title: "YEAR",
    details: ["2022"],
  },
  {
    title: "ROLE",
    details: ["Product Design", "Interaction Design", "Usability Testing"],
  },
  {
    title: "INDUSTRY",
    details: ["Web3"],
  },
];

const MetaphiHeroSection = () => {
  return (
    <ProjectHeroSection
      projectImage={MetaPhiHero}
      projectName="Metaphi"
      projectSummary="We caused a 68% decrease in drop-off rates of non-native crypto users from dApps by designing a non-custodial wallet that incorporated flows commonly used in web2. We also created SDKs that can easily be incorporated into web2 and web3 platforms. Here is how we achieved this.👇🏾"
      roleDetails={roleDetails}
      heroPreText="Reducing drop-off rates through an innovative non-custodial wallet"
    />
  );
};

export default MetaphiHeroSection;
