import ListText from "../../../../../ui/listText/ListText";
import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, Image, black3 } from "../../../../../ui/styles";

const ProblemIdentifying = () => {
  const problemIdentifyingList = [
    "Create a trusted application that helps people to handle the major cores of their trip all in one place.",
    "Making sure the experience the users get while using the application is top-notch while also giving priority to the user interface.",
    "Ensuring the application is intuitive and easy to understand while confirming flexibility at every possible instance in the application.",
    "Design an application that provides locations for relationship-specific purposes such as family vacations, team bonding sessions, and so on.",
    "Create an application that gives users full details and information about the location they are traveling to.",
  ];
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle
        title="Identifying, Understanding, and Evaluating the Problem"
        color={black3}
      />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="It's a thing to have an idea, and it's a different situation entirely for your idea to be valid as UX designers, the only way to validate your idea is through research and interview, to name a few. To validate my idea for suave, I interviewed about twelve (12) individuals among which I had, CEOs of companies, a front-end developer, visual designers, product designers, writers, and business experts via phone calls and physical meet-ups."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="In the interview, most people talked about how frustrating it is to plan their trips as most agencies and agents don't get them the kind of flight they want, some complained about their hotel accommodations being mixed up with other person’s own which leaves them stranded in a country where they are strangers."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="A group of individuals also complained about not having the flexibility to extend their return date. Over 70% complained of being scammed at one point or the other while trying to get agencies to help them handle the core of their trip. Also, Toni, a writer who loves to travel a lot complained that she always has to go through the stress of thinking about where next to go get her creative juice up. Yewande put out her frustration about having to do a lot of research to know where next she and her family of six (6) can travel to have a good and intimate family bonding time. Ultimately, some individuals complained about not having the full information about where they were traveling."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="I also got some insights from a tweet made by the CEO of mono and from a conversation with the CEO of Tiqwa."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src="" alt="problem-identifying-1" />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="User Personas"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="Based on the interview conducted, I factored out two(2) user personas to better visualize the goals and frustrations of the individuals interviewed."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px" flex flexdirection="column" gap="40px">
        <Image src="" alt="problem-identifying-2" />
        <Image src="" alt="problem-identifying-3" />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Project Goals"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="After analyzing the data I got from the interview conducted, I decided to draw out what will be the core goals of the application to keep in check a user-centered design process moving on:"
          size="16px"
          lineheight="30px"
          color={black3}
        />
        {problemIdentifyingList.map((list, index) => (
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
  );
};

export default ProblemIdentifying;
