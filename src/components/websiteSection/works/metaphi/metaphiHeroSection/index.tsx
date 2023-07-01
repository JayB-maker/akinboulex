import ProjectHeroSection from "../../../../../ui/projectHeroSection";

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
      projectImage="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979358/portfolio-assets/metaphi_bcd0nk.svg"
      projectName="Metaphi"
      projectSummary="We caused a 68% decrease in drop-off rates of non-native crypto users from dApps by designing a non-custodial wallet that incorporated flows commonly used in web2. We also created SDKs that can easily be incorporated into web2 and web3 platforms. Here is how we achieved this.👇🏾"
      roleDetails={roleDetails}
      heroPreText="Reducing drop-off rates through an innovative non-custodial wallet"
    />
  );
};

export default MetaphiHeroSection;
