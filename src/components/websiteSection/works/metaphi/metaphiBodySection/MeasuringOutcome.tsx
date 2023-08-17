import { Card, Image, black1, black3 } from "../../../../../ui/styles";
import MainTitle from "../../../../../ui/mainTitle";
import MainText from "../../../../../ui/mainText";
import TextHighlight from "../../../../../ui/TextHighlight/TextHighlight";
import ListText from "../../../../../ui/listText/ListText";
import PrototypeButton from "../../../../../ui/prototypeButton";
import MeasuringOutcome1 from '../../../../../assets/measuring-outcome-1.svg'

const MeasuringOutcome = () => {
  const testAreaDetails = [
    "Drop-off rate: We intend to continue to monitor how many people drop off as this will determine how much more improvement needs to be made.",
    "Task completion time: We will observe how much time it takes to complete tasks to see if there will be a need for any further solutions.",
  ];
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Measuring Outcome — Impact" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="We designed an incredible solution. But solutions are only as incredible as their effectiveness in solving the problem they were built to solve. So we tested once again with users."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="We weren't just running tests on our product but we were running tests on it in relation to other platforms that it can be incorporated in."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src={MeasuringOutcome1} alt="measuring-outcome-1" smwidth="100%" />
      </Card>
      <Card margin="14px 0">
        <TextHighlight
          text="We recorded a 68% decrease in the drop-off rate. 18% more than our initial goal."
          size="24px"
          lineheight="30px"
          color={black1}
        />
      </Card>
      <Card margin="0 0 64px">
        <MainText
          text="As the product moves on to production, the goal is to keep testing to measure outcome and impact and identify areas for improvement."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Areas to test for include:"
          color={black3}
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
        />
        <Card flex flexdirection="column" gap="8px">
          {testAreaDetails.map((area, index) => (
            <ListText
              key={index}
              text={area}
              size="16px"
              lineheight="30px"
              color={black3}
            />
          ))}
        </Card>
      </Card>

      <Card
        margin="40px 0 0"
        flex
        justifycontent="center"
        gap="56px"
        alignitems="center"
        smflexdirection="column"
        smgap="40px"
        smmargin="40px 0 72px"
      >
        <PrototypeButton buttonText="View Web Prototype" path="" />
        <PrototypeButton buttonText="View Mobile Prototype" path="" />
      </Card>
    </Card>
  );
};

export default MeasuringOutcome;
