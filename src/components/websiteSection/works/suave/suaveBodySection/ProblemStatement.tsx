import { Card, black3 } from "../../../../../ui/styles";
import MainTitle from "../../../../../ui/mainTitle";
import MainText from "../../../../../ui/mainText";
import ListText from "../../../../../ui/listText/ListText";

const ProblemStatement = () => {
  const problemStatementList = [
    "Getting scammed of your money in the process of getting agents or agencies to help with the trip as it is somewhat difficult to specifically pinpoint the real and fake agents and agencies.",
    "Possibilities of you either missing or pushing for travel and return dates because one or some of the documents isn’t or aren’t forthcoming because an agent or agency is slacking in getting you what’s needed.",
    "In a case of a planned or custom package trip plan, you don’t have the flexibility to either backdate or push forward your travel and return dates even while on the trip, you don’t have the pick the kind and number of rooms, the number of people you want with you on your trip (i.e couple’s trip, team vacations, etc) amidst other things.",
  ];
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Problem Statement" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="Over the years, traveling and planning of trips have been somewhat manual as you have to book your flight, apply for a visa, and book your hotel all mostly separately and from different applications and/ or websites. If you don’t want to go through this route, then you have to get help from agencies that can help with these or companies that have custom package trip plans (especially when you want to go on vacation) which mostly come at an expensive cost, no-flexibility options and might take a lot of time to get you all that is needed for your trip. When you go through either of these routes, there are some possibilities which include:"
          size="16px"
          lineheight="30px"
          color={black3}
        />
        {problemStatementList.map((list, index) => (
          <ListText
            key={index}
            text={list}
            size="16px"
            lineheight="30px"
            color={black3}
          />
        ))}
        <MainText
          text="Let’s not forget that you won’t have the full information about where you’re traveling unless you do the deep research on your own."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="To address all these and more, the idea to design an application that doesn’t only give you full information about where you’re traveling to but also books your flight sorts your accommodation, provides the easiest means to get a visa, and saves you the stress of thinking of where to go for your vacation amidst other things came to live."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="The sole goal of this application is to provide a stress-free trip planning platform while providing a lot of flexibility and convenience while at it."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
    </Card>
  );
};

export default ProblemStatement;
