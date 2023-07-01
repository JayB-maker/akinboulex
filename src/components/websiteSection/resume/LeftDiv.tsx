import { Card, Text, TitleText, black3 } from "../../../ui/styles";

const resumeDetails = [
  {
    company: "Afriex, Oct 2022 - Dec 2022",
    role: "Product Designer | Texas, United States",
  },
  {
    company: "Metaphi, May 2022 - Aug 2022",
    role: "Product Designer | San Francisco, California",
  },
  {
    company: "Crypcentra, May 2021 - April 2022",
    role: "Product Designer | London, United Kingdom",
  },
  {
    company: "Trava, Oct 2021 - Dec 2021",
    role: "Product Designer | Toronto, Canada",
  },
  {
    company: "Kiwi, Feb 2021 - April 2021",
    role: "Product Designer | London, United Kingdom",
  },
];

const LeftDiv = () => {
  return (
    <Card flex flexdirection="column" gap="64px" smgap="32px">
      <TitleText
        size="48px"
        lineheight="69px"
        weight="500"
        color={black3}
        smsize="32px"
        smlineheight="46px"
      >
        My Resume
      </TitleText>
      <Card flex flexdirection="column" gap="96px" smgap="56px">
        {resumeDetails.map((resume, index) => (
          <Card flex flexdirection="column" gap="8px" key={index}>
            <Text
              size="20px"
              lineheight="38px"
              weight="400"
              color={black3}
              smsize="16px"
              smlineheight="30px"
            >
              {resume.company}
            </Text>
            <Text
              size="20px"
              lineheight="38px"
              weight="400"
              color={black3}
              smsize="16px"
              smlineheight="30px"
            >
              {resume.role}
            </Text>
          </Card>
        ))}
      </Card>
    </Card>
  );
};

export default LeftDiv;
