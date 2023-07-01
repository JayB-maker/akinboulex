import {
  black1,
  Card,
  InnerSection,
  MainSection,
  Text,
} from "../../../../../src/ui/styles";
import HeroMainText from "./HeroMainText";

const HomeHeroSection = () => {
  return (
    <MainSection width="100%" padding="30px 0 0">
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          gap="8px"
          alignitems="center"
          justifycontent="center"
          position="relative"
          width="100%"
        >
          <Card flex gap="28px" alignitems="center" width="100%">
            <Card height="1px" width="100%" smwidth="50%" border={`1px dashed ${black1}`} />
            <Text width="364px !important" size="16px" smsize="12px" smlineheight="17.4px" smwidth="257px !important" lineheight="23px" weight="500">
              Available for full-time, contract, and freelance opportunities.
            </Text>
          </Card>
          <HeroMainText />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default HomeHeroSection;
