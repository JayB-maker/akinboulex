import ProjectCard from "../../../../../ui/projectCard/ProjectCard";
import { Card } from "../../../../../ui/styles";

const cryptoInvestmentDetails = [
  {
    projectName: "Designing a hands-off crypto investment mobile app",
    image: "https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979282/portfolio-assets/kiwi-home_w7cko9.svg",
    buttonText: "Read Case Study",
    color: "#131902",
    textWidth: "478px",
    path: "/",
  },
  {
    projectName:
      "Revolutionizing the art and act of trips and vacations planning",
    image: "https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979370/portfolio-assets/suave-home_mqdcbr.svg",
    buttonText: "Read Case Study",
    color: "#230E7C",
    textWidth: "478px",
    path: "/",
  },
];

const CryptoInvestment = () => {
  return (
    <Card
      flex
      gap="24px"
      width="100%"
      mdflexdirection="column"
      mdgap="72px"
      smgap="40px"
    >
      {cryptoInvestmentDetails.map((detail, index) => (
        <ProjectCard
          key={index}
          path={detail.path}
          image={detail.image}
          projectName={detail.projectName}
          buttonText={detail.buttonText}
          color={detail.color}
          textWidth={detail.textWidth}
        />
      ))}
    </Card>
  );
};

export default CryptoInvestment;
