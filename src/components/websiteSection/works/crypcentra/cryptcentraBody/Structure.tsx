import ListText from "../../../../../ui/listText/ListText";
import MainTitle from "../../../../../ui/mainTitle";
import ProjectSummaryCard from "../../../../../ui/projectSummaryCard";
import PrototypeButton from "../../../../../ui/prototypeButton";
import { Card, Image, black3 } from "../../../../../ui/styles";

const Structure = () => {
  const structureList = [
    "Focus on user outcomes",
    "Restless reinvention",
    "Diverse empowered team",
  ];

  const outcomeList = [
    "Our first testing ground was at Web Summit in Lisbon, Portugal. Live product demonstrations were a success.",
    "Through high quality designs with great user experience, we were able to create a platform that peeked investors and VCs' interests and commitment to investing in the company through 500 Startups.",
    "Our customer acquisition and product adoption was through the roof with $0  spent on marketing",
  ];
  return (
    <Card flex flexdirection="column" gap="72px">
      <Card flex flexdirection="column" gap="16px">
        <MainTitle title="Structure" color={black3} />
        <Card flex flexdirection="column" gap="16px">
          <MainTitle
            title="An Enterprise Design Thinking Framework"
            color={black3}
            size="24px"
            lineheight="34px"
            smSize="16px"
            smlineheight="30px"
          />
          <Card flex flexdirection="column" gap="8px">
            {structureList.map((list, index) => (
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
      <Card flex flexdirection="column" gap="40px">
        <ProjectSummaryCard
          text="Drawing wireframes with help from the team which fostered quick structuring and validation of concepts."
          notSummary
          size="24px"
          lineheight="34px"
        />
        <Image src="" alt="structure-1" />
        <Image src="" alt="structure-2" />
        <Image src="" alt="structure-3" />
      </Card>
      <Card flex flexdirection="column" gap="40px">
        <ProjectSummaryCard
          text="Once we reached a point of certainty with our decison making, we went straight to designing"
          notSummary
          size="24px"
          lineheight="34px"
        />
        <Image src="" alt="structure-3" />
        <Image src="" alt="structure-4" />
        <Image src="" alt="structure-5" />
        <Card flex gap="16px" smgap="16px" mdflexdirection="column">
          <Image src="" alt="structure-6" />
          <Image src="" alt="structure-7" />
          <Image src="" alt="structure-8" />
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="40px">
        <ProjectSummaryCard
          text="We also designed some DeFi Tools through maximizing Liquidity Pools and Vault Staking to the experience of our customers"
          notSummary
          size="24px"
          lineheight="34px"
        />
        <Image src="" alt="structure-9" />
        <Image src="" alt="structure-10" />
        <Image src="" alt="structure-11" />
        <Image src="" alt="structure-12" />
      </Card>
      <Card flex flexdirection="column" gap="16px">
        <MainTitle title="Outcome — Design Impact" color={black3} />
        <Card flex flexdirection="column" gap="8px">
          {outcomeList.map((list, index) => (
            <ListText
              key={index}
              text={list}
              size="16px"
              lineheight="30px"
              color={black3}
            />
          ))}
        </Card>
        <Card
          margin="40px 0 0"
          flex
          justifycontent="center"
          alignitems="center"
          smmargin="40px 0 72px"
        >
          <PrototypeButton buttonText="View Prototype" path="" />
        </Card>
      </Card>
    </Card>
  );
};

export default Structure;
