import { Card, Image, black3 } from '../../../../../ui/styles'
import MainTitle from '../../../../../ui/mainTitle'
import MainText from '../../../../../ui/mainText'

const SaveTime = () => {
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Designing to save time" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="As identified from the research, a recurring theme was time and how participants did not have a lot of it to spare."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="With this in mind, we kept the homepage simple and intuitive, using a green button with high contrast for the call to invest action. This way without needing to scan the entire screen, they can perform the action they are here for, saving valuable seconds for them."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Image src="" alt="save-time-1" />
      </Card>
      <MainText
          text="All flows within the app were reduced to the shortest stretch that was possible without compromising on structure, progressive disclosure, and experience."
          size="16px"
          lineheight="30px"
          color={black3}
        />
    </Card>
  )
}

export default SaveTime