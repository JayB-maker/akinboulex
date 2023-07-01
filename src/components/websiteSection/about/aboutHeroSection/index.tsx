import {
  Card,
  InnerSection,
  MainSection,
  Text,
} from "../../../../ui/styles";

const AboutHeroSection = () => {
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
            <Card
              height="1px"
              width="70%"
              smwidth="10%"
            //   border={`1px dashed ${black1}`}
            />
            <Text
              width="550px !important"
              size="16px"
              smsize="12px"
              smlineheight="17.4px"
              smwidth="310px !important"
              lineheight="23px"
              weight="500"
            >
              I’m actively seeking a new position as a Senior/Mid Level Product
              Designer and open to explore full-time, contract, or freelance
              roles.
            </Text>
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default AboutHeroSection;
