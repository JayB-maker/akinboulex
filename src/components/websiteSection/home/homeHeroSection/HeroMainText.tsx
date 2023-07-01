import { Card, TitleText } from "../../../../ui/styles";

const HeroMainText = () => {
  return (
    <Card width="878px" mdwidth="100%" flex flexdirection="column" gap="24px" smgap="8px">
      <Card width="100%" height="141px" smheight="81px" position="relative">
        <Card position="absolute" left="0" top="0">
          <TitleText
            position="absolute"
            lineheight="141px"
            size="112px"
            smsize="56px"
            smlineheight="81px"
            weight="500"
          >
            DIGITAL
          </TitleText>
        </Card>
      </Card>
      <Card width="100%" height="141px" smheight="81px" position="relative">
        <Card position="absolute" right="0" top="0">
          <TitleText
            position="absolute"
            lineheight="141px"
            size="112px"
            smsize="56px"
            smlineheight="81px"
            weight="500"
          >
            PRODUCT
          </TitleText>
        </Card>
      </Card>
      <Card width="100%" height="141px" smheight="81px" position="relative">
        <Card position="absolute" left="0" top="0">
          <TitleText
            position="absolute"
            lineheight="141px"
            size="112px"
            smsize="56px"
            smlineheight="81px"
            weight="500"
          >
            DESIGNER
          </TitleText>
        </Card>
      </Card>
    </Card>
  );
};

export default HeroMainText;
