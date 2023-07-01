import { Card, Text, TitleText, black2, black3 } from "../../../../ui/styles";

const skillsetDetails = [
  {
    title: "Current Skillset",
    tools: [
      "USER INTERFACE DESIGN",
      "USE EXPERIENCE DESIGN",
      "PRODUCT DESIGN",
      "INTERACTION DESIGN",
      "DESIGN SYSTEMS",
    ],
  },
  {
    title: "Software Proficiency ",
    tools: [
      "FIGMA",
      "WHIMSICAL",
      "HOTJAR",
      "MIRO",
      "NOTION",
      "GOOGLE ANALYTICS",
      "PROTOPIE",
      "FIGJAM",
      "BALSAMIQ",
    ],
  },
];

const Skillset = () => {
  return (
    <Card
      flexratio="2"
      flex
      flexdirection="column"
      gap="38px"
      padding="110px 0 0"
      mdpadding="0"
      smalignitems="center"
    >
      {skillsetDetails.map((skill, index) => (
        <Card
          key={index}
          flex
          flexdirection="column"
          gap="16px"
          smalignitems="center"
        >
          <Text size="14px" color={black3} weight="400" smtextalign="center">
            {skill.title}
          </Text>
          <Card flex flexdirection="column" gap="14px" smalignitems="center">
            {skill.tools.map((tool, index) => (
              <TitleText
                size="14px"
                color={black2}
                weight="500"
                key={index}
                smtextalign="center"
              >
                {tool}
              </TitleText>
            ))}
          </Card>
        </Card>
      ))}
    </Card>
  );
};

export default Skillset;
