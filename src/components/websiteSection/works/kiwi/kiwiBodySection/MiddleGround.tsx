import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, Image, black3 } from "../../../../../ui/styles";

const MiddleGround = () => {
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Designing for the middle ground" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="First, what were we building? Our proposed solution is a mobile app for users to invest in cryptocurrency without the need to carry out any monitoring on their own."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="This meant that if you wanted to invest in cryptocurrency but did not want to monitor and manage it yourself, you can send your fiat money to Kiwi and we invest it in the best crypto assets for you."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Now, how do we design for both sets of users?"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="We designed a portfolio screen that is familiar to crypto natives so they feel right at home. It contains all the concepts they have already been exposed to."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="At the same time, we kept it simple enough for non-crypto natives to be able to understand. In Image B below, we also added short descriptions of each term so it is easy to grasp what it is and what you can do with it."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Card
          flex
          gap="96px"
          width="100%"
          mdflexdirection="column"
          smgap="40px"
        >
          <Image src="" alt="middle-ground-1" />
          <Image src="" alt="middle-ground-2" />
        </Card>
      </Card>
      <MainText
        text="But that’s not all. We also introduced a Learn with Kiwi feature especially for non-crypto natives but also useful to crypto natives. This educates users on cryptocurrencies and the world of Kiwi, ensuring no one is left behind."
        size="16px"
        lineheight="30px"
        color={black3}
      />
      <MainText
        text="Research participants also identified the need to passively monitor the goings on in the crypto industry. So we designed a news section for them. Learn all you need to without leaving the app."
        size="16px"
        lineheight="30px"
        color={black3}
      />
      <Card margin="14px 0 40px">
        <Card
          flex
          gap="96px"
          width="100%"
          mdflexdirection="column"
          smgap="40px"
        >
          <Image src="" alt="middle-ground-3" />
          <Image src="" alt="middle-ground-4" />
        </Card>
      </Card>
    </Card>
  );
};

export default MiddleGround;
