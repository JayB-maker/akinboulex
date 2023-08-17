import MainText from "../../../../../ui/mainText";
import MainTitle from "../../../../../ui/mainTitle";
import { Card, Image, black3 } from "../../../../../ui/styles";
import PushingPixels1 from '../../../../../assets/pushing-pixels-1.svg'
import PushingPixels2 from '../../../../../assets/pushing-pixels-2.svg'
import PushingPixels3 from '../../../../../assets/pushing-pixels-3.svg'
import PushingPixels4 from '../../../../../assets/pushing-pixels-4.svg'
import PushingPixels5 from '../../../../../assets/pushing-pixels-5.svg'
import PushingPixels6 from '../../../../../assets/pushing-pixels-6.svg'
import PushingPixels7 from '../../../../../assets/pushing-pixels-7.svg'
import PushingPixels8 from '../../../../../assets/pushing-pixels-8.svg'
import PushingPixels9 from '../../../../../assets/pushing-pixels-9.svg'
import PushingPixels10 from '../../../../../assets/pushing-pixels-10.svg'
import PushingPixels11 from '../../../../../assets/pushing-pixels-11.svg'
import PushingPixels12 from '../../../../../assets/pushing-pixels-12.svg'
import PushingPixels13 from '../../../../../assets/pushing-pixels-13.svg'

const PushingPixels = () => {
  return (
    <Card flex flexdirection="column" gap="16px">
      <MainTitle title="Pushing Pixels" color={black3} />
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="We decided on a simple initial sign-in flow that did not require a browser extension. This flow matches the kind you will typically find on a web2 product."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="72px" smgap="40px" margin="14px 0 40px">
        <Image src={PushingPixels1} alt="pushing-pixels-1" />
        <Card flex gap="21px" width="100%" mdflexdirection="column" smgap="40px">
          <Image src={PushingPixels2} alt="pushing-pixels-2" />
          <Image src={PushingPixels3} alt="pushing-pixels-3" />
        </Card>
      </Card>
      <MainText
        text="We also designed these as SDKs so that our clients can easily incorporate them onto their platforms. And because we kept the flow similar to that in web2 products, it meant that web2 platforms that want their users to hold crypto assets could also deconstruct and incorporate our solution."
        size="16px"
        lineheight="30px"
        color={black3}
      />
      <Card margin="14px 0 40px">
        <Image src={PushingPixels4} alt="pushing-pixels-4" smwidth="100%" />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="User has control of keys"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="Considering the risks associated with storing assets with a custodian, we (as a non-custodial wallet) allow users store their own private keys. This gives them full access to their assets and consequently more responsibility in protecting it."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px" smwidth="100%">
        <Image src={PushingPixels5} alt="pushing-pixels-5" smwidth="100%" />
      </Card>
      <MainText
        text="To access this private key, the user creates a password and uses this to decrypt their private key. They are of course, informed of how much privacy is required when dealing with their keys."
        size="16px"
        lineheight="30px"
        color={black3}
      />
      <Card margin="14px 0 40px">
        <Card flex gap="27px" smgap="40px" width="100%" mdflexdirection="column">
          <Image src={PushingPixels6} alt="pushing-pixels-6" />
          <Image src={PushingPixels7} alt="pushing-pixels-7" />
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="The Dashboard"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="Users have a personalized dashboard showing their total wallet balance alongside connected dApps, Tokens, and NFTs. The goal is to deliver a simple, yet top-notch user experience through every touchpoint."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="72px" smgap="40px" margin="14px 0 40px">
        <Image src={PushingPixels8} alt="pushing-pixels-8" />
        <Image src={PushingPixels9} alt="pushing-pixels-9" />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Purchasing Crypto"
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color={black3}
        />
        <MainText
          text="Having assets in their wallet is quite important for users, especially when trying to make payments. We’ve ensured that buying crypto is simple, fast, and intuitive. The “buy” button has been strategically placed on the web and mobile versions to ensure that with one click, the user can input details, and make the purchase."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card flex flexdirection="column" gap="72px" smgap="40px" margin="14px 0 40px">
        <Image src={PushingPixels10} alt="pushing-pixels-10" />
        <Image src={PushingPixels11} alt="pushing-pixels-11" />
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainTitle
          title="Discharging Features "
          size="24px"
          smSize="16px"
          smlineheight="23px"
          lineheight="34px"
          color="#E42C2C"
        />
        <MainText
          text="Users do not always know what goes on behind the scenes. So we decided to introduce a solution that shows their progress as well as keeps them informed on what was going on."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
      <Card margin="14px 0 40px">
        <Card flex gap="21px" smgap="40px" width="100%" mdflexdirection="column">
          <Image src={PushingPixels12} alt="pushing-pixels-12" />
          <Image src={PushingPixels13} alt="pushing-pixels-13" />
        </Card>
      </Card>
      <Card flex flexdirection="column" gap="8px">
        <MainText
          text="As we tested with users and spoke with game developers and gamers within our network, we realized that this was not a feature users found useful. While knowing the status of your action is important, insights gathered from the tests showed that this was a little intimidating and they were better off without it."
          size="16px"
          lineheight="30px"
          color={black3}
        />
        <MainText
          text="So we put these screens aside and did not send them to production. We, however, may revisit them in the near future."
          size="16px"
          lineheight="30px"
          color={black3}
        />
      </Card>
    </Card>
  );
};

export default PushingPixels;
