import {
  Card,
  Image,
  LinkText,
  TitleText,
  white,
} from "../../../../../ui/styles";

const DropOffRate = () => {
  return (
    <Card
      flex
      height="528px"
      mdheight="unset"
      shadow="2px 4px 38px rgba(0, 0, 0, 0.03)"
      mdflexdirection="column-reverse"
    >
      <Card
        bg="#F7F6FE"
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
          Reducing drop-off rates through an innovative non-custodial wallet
        </TitleText>
        <LinkText
          to="/"
          padding="16px 32px"
          size="16px"
          smpadding="16px 24px"
          smsize="14px"
          border={`1px solid #100847`}
          lineheight="normal"
          transition="background 0.5s"
          hbg="#100847"
          hcolor={white}
          color="#100847"
          radius="200px"
          width="fit-content"
        >
          Read Case Study
        </LinkText>
      </Card>
      <Card flexratio="1" bg="#FFFFFF" mdradius="16px 16px 0px 0px" overflow="hidden">
        <Image src="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979289/portfolio-assets/metaphil-home_urkgwo.svg" alt="metaphil" width="100%" />
      </Card>
    </Card>
  );
};

export default DropOffRate;
