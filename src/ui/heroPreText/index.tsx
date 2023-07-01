import { Card, Text, black2, white1, white5 } from "../styles";

interface IHeroPreTextProps {
  text?: string;
}

const HeroPreText = (props: IHeroPreTextProps) => {
  const { text } = props;
  return (
    <Card
      bg={white1}
      border={`1px solid ${white5}`}
      radius="24px"
      padding="8px 16px"
      smwidth="100%"
    >
      <Text
        size="16px"
        lineheight="23px"
        color={black2}
        weight="500"
        smsize="12px"
        smlineheight="17.4px"
        textalign="center"
        center
      >
        {text}
      </Text>
    </Card>
  );
};

export default HeroPreText;
