import TextHighlight from "../../../../../ui/TextHighlight/TextHighlight";
import ListText from "../../../../../ui/listText/ListText";
import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, black3 } from "../../../../../ui/styles";

const Background = () => {
  const conflictList = [
    "The crypto space is emerging and has a lot of technicalities,",
    "Lacked understanding of institutional investors' workflows and pain points when researching and investing in digital assets,",
    "First time working on a SaaS crypto project this large.",
  ];
  const resourcesList = [
    "Primary and Secondary User Research",
    "User stories",
    "Product Requirements",
  ];
  const understandList = [
    "Interpretation of data",
    "Validation of decisions",
    "Continuous iterations with team",
    "Gathering feedback from stakeholders",
    "Early involvement of engineering team",
  ];
  return (
    <Card flex flexdirection="column" gap="72px">
      <Card flex flexdirection="column" gap="16px">
        <MainTitle title="Background" color={black3} />
        <Card flex flexdirection="column" gap="8px">
          <MainText
            text="With the increase in the institutional adoption of digital assets, there is a lag in the production of institutional-grade tooling, causing these investors to be met with friction at every stage of the investment cycle."
            size="16px"
            lineheight="30px"
            color={black3}
          />
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="16px">
        <MainTitle title="Objective" color={black3} />
        <Card flex flexdirection="column" gap="8px">
          <MainText
            text="Design the overall experience of an end-to-end data and research platform to maximise returns and streamline the research, strategy development, and investment process."
            size="16px"
            lineheight="30px"
            color={black3}
          />
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="16px">
        <MainTitle title="Conflict" color={black3} />
        <Card flex flexdirection="column" gap="8px">
          {conflictList.map((list, index) => (
            <ListText
              key={index}
              text={list}
              size="16px"
              lineheight="30px"
              color={black3}
            />
          ))}
        </Card>
      </Card>
      <TextHighlight
        text='"Before we wrote a single line of code, we spoke to over 100 digital assets funds-investing firms and investors in to understand their pain-points in depth."'
        size="24px"
        lineheight="45px"
      />
      <Card flex flexdirection="column" gap="16px">
        <MainTitle title="Resources" color={black3} />
        <Card flex flexdirection="column" gap="8px">
          {resourcesList.map((list, index) => (
            <ListText
              key={index}
              text={list}
              size="16px"
              lineheight="30px"
              color={black3}
            />
          ))}
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="16px">
        <MainTitle title="Understand" color={black3} />
        <Card flex flexdirection="column" gap="8px">
          {understandList.map((list, index) => (
            <ListText
              key={index}
              text={list}
              size="16px"
              lineheight="30px"
              color={black3}
            />
          ))}
        </Card>
      </Card>
    </Card>
  );
};

export default Background;
