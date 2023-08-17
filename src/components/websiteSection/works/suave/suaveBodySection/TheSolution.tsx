import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, Image, black3 } from "../../../../../ui/styles";

const TheSolution = () => {
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="The Solution" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="After identifying, understanding, and evaluating the problem, some design decisions were made to craft a user-centered solution that’ll address the problems identified."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="User flow"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="I drew a user flow to better understand how different segments of the application interact with each other and to provide clear information retrieval and a swift and smooth experience for the users of the application. This was also done to ensure easy completion of various tasks on the application by the user."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src="" alt="the-solution-1" />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Low fidelity wireframes"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="I made low-fidelity wireframes to get a clearer version of what my high-fidelity designs will look like with respect to the set goals and to also visualize any flaws that might affect the experience of the application from the design perspective."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src="" alt="the-solution-2" />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Colors and Typography"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="After some research, I concluded it was the best Han Purple Color (#5B39E9) as the primary color because of the restful and suave feeling it brings. It also breeds trust and comfortability which is one of the major core values of the brand. The secondary color is Eerie Black just to complement the primary color for best visual hierarchy and esthetics."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="The typeface — Open Sans is a neat and smooth Sans serif typeface that gives a friendly and welcoming feeling to the application."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src="" alt="the-solution-3" />
      </Card>
    </Card>
  );
};

export default TheSolution;
