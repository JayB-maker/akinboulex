import {
  Card,
  InnerSection,
  MainSection,
  Text,
  TitleText,
  black3,
  black4,
  white,
  white1,
  white2,
  white5,
} from "../../../../../src/ui/styles";
import SocialMedia from "./SocialMedia";
import DevelopedBy from "./DevelopedBy";

const MainFooter = () => {
  return (
    <MainSection
      width="100%"
      bg={white}
      btop={`1px solid ${white2}`}
      padding="50px 0"
    >
      <InnerSection>
        <Card flex flexdirection="column" gap="50px" alignitems="center">
          <Card flex flexdirection="column" gap="8px" alignitems="center">
            <TitleText
              size="40px"
              smsize="24px"
              smlineheight="34px"
              lineheight="58px"
              weight="500"
              color={black3}
            >
              akinboulex@gmail.com
            </TitleText>
            <Card
              bg={white1}
              border={`1px solid ${white5}`}
              padding="8px 24px"
              radius="48px"
              pointer
            >
              <Text size="12px" lineheight="17.4px" color={black4}>
                Click to Copy
              </Text>
            </Card>
          </Card>
          <SocialMedia />
          <DevelopedBy />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default MainFooter;
