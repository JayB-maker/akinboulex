import {
  Card,
  Image,
  InnerSection,
  LinkText,
  MainSection,
  Text,
  TitleText,
  black,
  black2,
  white,
} from "../../../../ui/styles";
import IntroLine from "./IntroLine";

const Intro = () => {
  return (
    <MainSection width="100%">
      <InnerSection>
        <Card
          flex
          mdflexdirection="column"
          smgap="56px"
          justifycontent="space-between"
          alignitems="center"
          height="250px"
          mdheight="unset"
          position="relative"
          smmargin="96px 0 0"
        >
          <Card padding="50px 40px" smpadding="0">
            <TitleText
              width="457px"
              size="16px"
              weight="500"
              lineheight="24px"
              color={black2}
              mdwidth="100%"
            >
              Boluwatife is an astounding product designer who creates
              beautiful, user-friendly, and delightful digital experiences. He
              partners with teams and businesses to drive innovation and
              measurable impact through creative and innovative design
              solutions.
            </TitleText>
          </Card>
          <Card flex gap="10px" alignitems="center" mddisplay="none">
            <Image src="assets/arrow-down.svg" alt="arrow-down" />
            <Text>Scroll down</Text>
          </Card>
          <LinkText
            to="mailto:ajiboyeabiodun001@gmail.com"
            padding="32px 80px"
            smpadding="24px 88px"
            size="24px"
            smsize="16px"
            weight="500"
            bg={black}
            lineheight="normal"
            transition="background 0.5s"
            color={white}
            radius="232px"
          >
            Contact
          </LinkText>
          <IntroLine />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default Intro;
