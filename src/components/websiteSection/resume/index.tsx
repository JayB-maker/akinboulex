import { Card, InnerSection, LinkText, MainSection, black, white } from "../../../ui/styles"
import LeftDiv from "./LeftDiv"

const Resume = () => {
  return (
    <MainSection width="100%" padding="88px 0">
      <InnerSection>
        <Card flex justifycontent="space-between" alignitems="center" smflexdirection="column" smgap="56px">
          <LeftDiv />
          <LinkText
            to="mailto:ajiboyeabiodun001@gmail.com"
            padding="32px 80px"
            smpadding="24px 88px"
            smwidth="100%"
            size="24px"
            smsize="16px"
            weight="500"
            bg={black}
            lineheight="normal"
            transition="background 0.5s"
            color={white}
            radius="232px"
          >
            Download Resume
          </LinkText>
        </Card>
      </InnerSection>
    </MainSection>
  )
}

export default Resume