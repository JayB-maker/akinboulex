import MainText from "../../../../../ui/mainText"
import MainTitle from "../../../../../ui/mainTitle"
import { Card, Image, black3 } from "../../../../../ui/styles"

const DesigningFeatures = () => {
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Designing features" color={black3} />
      <Card flex flexdirection="column" gap="8px">
      <MainTitle
          title="Round-ups"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="Invest as you spend! Users can link their bank accounts to Kiwi and every change left after a transaction is automatically put into investments. This can be multiplied up to 10 times."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="If you need to turn this off at any time, you can do so with ease."
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
          <Image src="" alt="designing-features-1" />
          <Image src="" alt="designing-features-2" />
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Risk Levels"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="Not all users are open to high risk investments. For some, investing in crypto is risk enough. Resultantly, we designed three risk levels for users to pick from aptly named Cautious, Balanced, and Adventurous."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="The higher your risk level, the more you are able to get out of your investment."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src="" alt="designing-features-3" />
      </Card>
    </Card>
  )
}

export default DesigningFeatures