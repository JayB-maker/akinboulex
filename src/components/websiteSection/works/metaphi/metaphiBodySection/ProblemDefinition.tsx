import TextHighlight from "../../../../../ui/TextHighlight/TextHighlight";
import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, black3 } from "../../../../../ui/styles";

const ProblemDefinition = () => {
  return (
    <Card flex flexdirection="column" gap="32px">
      <Card flex flexdirection="column" gap="24px">
        <MainTitle title="Defining the problem" color={black3} />
        <MainText
          text="The team at Metaphi Inc (a startup building innovative financial solutions for web2 and web3), identified a problem that was worth solving and brought me on board to help solve it."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainText text="The problem?" size="16px" lineheight="30px" color={black3} />
        <TextHighlight
          text="Non-crypto native users find non-custodial wallets intimidating, resulting in significant user drop-offs, and also causing a huge barrier to entry into the blockchain space."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle title="Think of this..." size="24px" smSize="16px" smlineheight="23px" lineheight="34px" color={black3} />
        <MainText
          text="Sandra, a gamer pretty familiar with the web2 space hears about Pegaxy, a blockchain game, and decides to play. To do so, she needs to integrate a wallet to enable payments. She is unfamiliar with how crypto wallets work and has just learned that she will need to install a browser extension and try to decipher how to navigate around that too. She is pissed and shuts down her device…never to be heard from again."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="There are thousands of Sandras out there waiting on a solution. That’s where we come in."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Making the blockchain more accessible to"
          span="non-crypto native users"
          size="32px"
          smSize="24px"
          smlineheight="34px"
          lineheight="145%"
          color={black3}
          width="830px"
        />
        <MainText
          text="While focusing on gamers, game companies, and game developers as clients, our minds were fixed on the customers…the actual users whose lives on the blockchain we could potentially make easier."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="Who are they? How do they spend their time? What is their experience level with web3?"
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="Generally between the ages of 16-35, our target users spend most of their time on electronic devices and are well acquainted with web2 products. While their knowledge of web3 is limited, they have used custodial wallets like Coinbase to trade crypto."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="We had established who we were designing for. Now let’s design."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
    </Card>
  );
};

export default ProblemDefinition;
