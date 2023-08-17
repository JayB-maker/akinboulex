import TextHighlight from "../../../../../ui/TextHighlight/TextHighlight";
import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, Image, black3 } from "../../../../../ui/styles";

const TalkingToUser = () => {
  return (
    <Card flex flexdirection="column" gap="32px">
      <Card flex flexdirection="column" gap="24px">
        <MainTitle title="Talking to Users" color={black3} />
        <MainText
          text="ASSUMPTION 1: Non-crypto natives will rather have a trusted party handle most of the processes involved in investing in crypto."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="ASSUMPTION 2: Crypto natives prefer to handle these processes on their own and monitor all the goings on."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="These assumptions are very related but involved speaking to both groups of people. We made a list of people in each category and reached out to them to ask just a single question:"
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="You are about investing in crypto. Which of these options would you go for?"
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="a. Monitor the markets, study the coins and then make a decision on which to invest in."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="b. Send your money to a trusted party and they handle the monitoring and management for you"
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="The Results"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <TextHighlight
          text="85% of crypto native users said they’d prefer to let a trusted party handle the monitoring and management. 80% of non-crypto native users also agreed to the same. Considering the low margin, could we design for both categories?"
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src="" alt="talking-to-user-1" />
      </Card>
      <MainText
          text="We decided to work on designing a solution that finds a middle ground between crypto natives and non-crypto natives."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      <MainText
          text="However, we learned something else from our research. A recurring theme in the research was time. Participants were open to our solution because they’d rather not spend a lot of time monitoring and managing. Thus, how can we ensure we help them save more time on our product?"
          size="16px"
          lineheight="30px"
          color={black3}
        />
    </Card>
  );
};

export default TalkingToUser;
