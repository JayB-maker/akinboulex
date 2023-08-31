import {
  Card,
  Image,
  LinkText,
  TitleText,
  white,
} from "../../../../../ui/styles";
import HomeCrypcentra from "../../../../../assets/home-crypcentra.svg";

const Cryptcentra = () => {
  return (
    <Card
      flex
      height="528px"
      mdheight="unset"
      shadow="2px 4px 38px rgba(0, 0, 0, 0.03)"
      flexdirection="row-reverse"
      mdflexdirection="column-reverse"
    >
      <Card
        bg="#F6FEFE"
        flex
        justifycontent="center"
        flexdirection="column"
        gap="32px"
        flexratio="1"
        padding="32px"
      >
        <TitleText
          size="32px"
          smsize="16px"
          smlineheight="23px"
          color="#100847"
          lineheight="46px"
          weight="500"
          width="476px"
          mdwidth="unset"
        >
          An end-to-end crypto research and investment web-based tool
        </TitleText>
        <LinkText
          to="/"
          padding="16px 32px"
          size="16px"
          smpadding="16px 24px"
          smsize="14px"
          border={`1px solid #191A1A`}
          lineheight="normal"
          transition="background 0.5s"
          hbg="#191A1A"
          hcolor={white}
          color="#191A1A"
          radius="200px"
          width="fit-content"
        >
          Read Case Study
        </LinkText>
      </Card>
      <Card
        flexratio="1"
        bg="#FFFFFF"
        mdradius="16px 16px 0px 0px"
        overflow="hidden"
        justifycontent="center"
        alignitems="center"
        flex
      >
        <Image
          src={HomeCrypcentra}
          alt="cryptcentra"
          width="90%"
          smwidth="100%"
        />
      </Card>
    </Card>
  );
};

export default Cryptcentra;
