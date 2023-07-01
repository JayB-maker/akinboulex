import ProjectHeroSection from "../../../../../ui/projectHeroSection";

const roleDetails = [
  {
    title: "YEAR",
    details: ["2021-2022"],
  },
  {
    title: "ROLE",
    details: ["Product Design", "Interaction Design", "Usability Testing"],
  },
  {
    title: "INDUSTRY",
    details: ["Web3", "DeFi"],
  },
];

const CrypcentraHeroSection = () => {
  return (
    <ProjectHeroSection
      projectImage="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979452/portfolio-assets/crypcentra_btwtjq.svg"
      projectName="Crypcentra"
      projectSummary="This UX case study is focused on how an end-to-end crypto investment data and research platform for institutions that streamlined the investment process, maximized returns, and addressed the institutional-grade tooling lag in digital asset adoption, resulting in successful live demonstrations, investor interest, and high customer acquisition with $0 spent on marketing was created."
      roleDetails={roleDetails}
      heroPreText="An end-to-end crypto research and investment web-based tool"
    />
  );
};

export default CrypcentraHeroSection;
