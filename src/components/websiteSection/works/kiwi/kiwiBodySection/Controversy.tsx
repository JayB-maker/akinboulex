import ListText from "../../../../../ui/listText/ListText";
import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, black3 } from "../../../../../ui/styles";

const Controversy = () => {
  const controversyListDetails = [
    "16-35year old's",
    "Financially buoyant",
    "Looking to invest",
    "Unwilling to study markets and coins by themselves and need all that handled for them.",
    "Non-crypto native",
    "Crypto native",
  ];
  return (
    <Card flex flexdirection="column" gap="32px">
      <Card flex flexdirection="column" gap="24px">
        <MainTitle
          title="The Controversy: Who are we designing for?"
          color={black3}
        />
        <MainText
          text="To begin the project, I had stakeholder meetings and was briefed on what the client was trying to build: an investment platform for cryptocurrencies."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="One of the first questions I asked was, “who are we designing for?” I was building a proto-persona to help guide my decisions going forward and we noted that we were designing for:"
          size="16px"
          lineheight="30px"
          color={black3}
        />
        {controversyListDetails.map((list, index) => (
          <ListText
            key={index}
            text={list}
            size="16px"
            lineheight="30px"
            color={black3}
          />
        ))}
        <MainText
          text="The last three points seemed a little off. People unwilling to study markets on their own are mostly non-crypto natives. This means we really were designing for non-crypto natives, however, the client believed we were designing for both sets of people."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="Seeing that both groups have different needs/goals/motivations, I decided to conduct research to (in)validate my assumptions."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
    </Card>
  );
};

export default Controversy;
