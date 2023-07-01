import { Card, Image, MainSection, white2 } from "../../../../ui/styles";

const aboutImagesDetails = [
  "assets/about1.png",
  "assets/about.png",
  "assets/about1.png",
];

const AboutImages = () => {
  return (
    <MainSection
      width="100%"
      padding="55px 0"
      smpadding="72px 0"
    >
      <Card
        overflow="scroll"
        flex
        gap="24px"
        maxwidth="1440px"
        width="100%"
        margin="0 auto"
        position="relative"
      >
        {aboutImagesDetails.map((image, index) => (
          <Card
            radius="32px"
            width="489px"
            smwidth="377px !important"
            key={index}
            bg={white2}
          >
            <Image src={image} smwidth="377px" />
          </Card>
        ))}
      </Card>
    </MainSection>
  );
};

export default AboutImages;
