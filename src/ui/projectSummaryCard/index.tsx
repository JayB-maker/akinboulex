import { Card, Text, TitleText, black1, black3, white1 } from "../styles";

interface IProjectSummaryCardProps {
  text?: string;
}

const ProjectSummaryCard = (props: IProjectSummaryCardProps) => {
  const { text } = props;
  return (
    <Card
      flex
      flexdirection="column"
      alignitems="center"
      padding="24px"
      width="978px"
      mdwidth="100%"
      smpadding=""
      bg={white1}
      gap="16px"
      smgap="8px"
      radius="12px"
    >
      <TitleText
        size="16px"
        smsize="14px"
        lineheight="30px"
        smlineheight="26.6px"
        color={black3}
        weight="400"
      >
        PROJECT SUMMARY
      </TitleText>
      <Text
        size="16px"
        smsize="14px"
        lineheight="23px"
        smlineheight="26.6px"
        color={black1}
        weight="400"
      >
        {text}
      </Text>
    </Card>
  );
};

export default ProjectSummaryCard;
