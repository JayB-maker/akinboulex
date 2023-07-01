import { Card, black1 } from "../../../../ui/styles";

const IntroLine = () => {
  return (
    <>
      <Card
        width="1000px"
        height="1px"
        border={`1px dashed ${black1}`}
        position="absolute"
        right="0"
        top="0"
        smdisplay="none"
      />
      <Card
        width="80%"
        height="1px"
        border={`1px dashed ${black1}`}
        position="absolute"
        right="0"
        top="-50px"
        display="none"
        smdisplay="block"
      />
      <Card
        width="700px"
        height="1px"
        border={`1px dashed ${black1}`}
        position="absolute"
        left="-24px"
        top="30px"
        mddisplay="none"
      />
      <Card
        width="1290px"
        height="1px"
        border={`1px dashed ${black1}`}
        position="absolute"
        left="-24px"
        top="224px"
        mddisplay="none"
      />
      <Card
        width="1px"
        height="252px"
        border={`1px dashed ${black1}`}
        position="absolute"
        left="0px"
        top="8px"
        mddisplay="none"
      />
      <Card
        width="1px"
        height="252px"
        border={`1px dashed ${black1}`}
        position="absolute"
        left="537px"
        top="8px"
        mddisplay="none"
      />
    </>
  );
};

export default IntroLine;
