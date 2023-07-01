import { Card, InnerSection, MainSection, black4 } from "../../../../ui/styles";
import MainAbout from "./MainAbout";
import Skillset from "./Skillset";

const AboutSection = () => {
  return (
    <MainSection width="100%" padding="32px 0 0">
      <InnerSection>
        <Card flex gap="30px" smflexdirection="column" smgap="40px">
          <MainAbout />
          <Card
            border={`1px dashed ${black4}`}
            margin="70px 0 0"
            mdmargin="0"
          />
          <Skillset />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default AboutSection;
