import { Card, black3 } from "../../../../../ui/styles";
import MainTitle from "../../../../../ui/mainTitle";
import MainText from "../../../../../ui/mainText";
import TextHighlight from "../../../../../ui/TextHighlight/TextHighlight";

const SolvingTheProblem = () => {
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Solving the problem" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Identifying areas for improvement"
          color={black3}
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
        />
        <MainText
          text="We began by speaking to users who matched our archetype and observed them try to navigate the world of blockchain, dApps, and non-custodial wallets. We recorded high frustration levels and a 74% abandonment rate."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <Card margin="32px 0 40px">
          <TextHighlight
            text="GOAL: Reduce drop-off rate by 50%"
            size="24px"
            lineheight="30px"
            color={black3}
          />
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Brainstorming"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="The first aspect of the problem we wanted to solve was the need to install a browser extension to be integrated with whatever dApp or platform a user would be working with. How could we bypass the need for a browser extension?"
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="Custodial wallets. They offer a simple way to on-ramp users into the crypto space and also allow for simple developer integrations. However, custodians have to comply with strict KYC and AML laws which requires a multi-step initial sign-up flow."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="While this may solve some of our problems, it’ll complicate things further for the user. In addition, hosted wallets can become a singular target for attackers. That is not a risk we were willing to take."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="As we ideated further, we arrived at the conclusion that one of the ways in which custodial wallets were easier to use than non-custodial, was in their usage of flows that are similar to what can be found in web2."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="Thus, how can we build a non-custodial wallet that borrows ideas and flows from web2, making it more accessible to non-crypto native users?"
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
    </Card>
  );
};

export default SolvingTheProblem;
