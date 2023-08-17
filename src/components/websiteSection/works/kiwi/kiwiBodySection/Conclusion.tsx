import { Card, black3 } from '../../../../../ui/styles'
import MainTitle from '../../../../../ui/mainTitle'
import MainText from '../../../../../ui/mainText'
import PrototypeButton from '../../../../../ui/prototypeButton'

const Conclusion = () => {
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Conclusion" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="Designing for crypto natives and non-crypto natives was the highlight of this project for me. I have worked on products for each category but for the first time, I was designing for both at the same time. The challenge was exciting and pushed me to design outside of my comfort zone."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="We employed lean methodologies while working, from fast and budget-friendly research to rapid design and prototyping, to testing and iteration. We were testing assumptions fast, validating them and designing in line with findings."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Version 2.0"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="Being big on testing and iterating, we spotted changes in design trends as well as updates and discoveries in the web3 space. To adapt, the team worked on version 2.0 of the Kiwi app which is currently in production."
          size="16px"
          lineheight="30px"
          color={black3}
        />
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
  )
}

export default Conclusion