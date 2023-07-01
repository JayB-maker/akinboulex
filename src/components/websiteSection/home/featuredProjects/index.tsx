import { Card, InnerSection, MainSection, white } from "../../../../ui/styles";
import Cryptcentra from "./projects/Cryptcentra";
import CryptoInvestment from "./projects/CryptoInvestment";
import DropOffRate from "./projects/DropOffRate";
import Envoy from "./projects/Envoy";

const FeaturedProjects = () => {
  return (
    <MainSection width="100%" padding="105px 0 162px" smpadding="32px 0 65px" bg={white}>
      <InnerSection>
        <Card flex flexdirection="column" gap="112px" mdgap="72px" smgap="40px">
          <DropOffRate />
          <CryptoInvestment />
          <Cryptcentra />
          <Envoy />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default FeaturedProjects;
