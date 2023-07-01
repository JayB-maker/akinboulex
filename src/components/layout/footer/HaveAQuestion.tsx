import {
  Card,
  InnerSection,
  MainSection,
  Text,
  black2,
  white,
  white2,
} from "../../../../src/ui/styles";

const HaveAQuestion = () => {
  return (
    <MainSection
      width="100%"
      bg={white}
      btop={`1px solid ${white2}`}
      padding="50px 0 34px"
    >
      <InnerSection>
        <Card flex justifycontent="center">
          <Text
            size="16px"
            smsize="12px"
            mdlineheight="22.8px"
            weight="400"
            width="439px"
            smwidth="317px"
            center
            lineheight="30px"
            color={black2}
          >
            Need to chat about a question, proposal, or project? Let's connect
            and create something awesome together! — Don't hesitate to reach
            out.
          </Text>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default HaveAQuestion;
