import {
  Card,
  Image,
  LinkText,
  Text,
  black5,
  white,
} from "../../../../../ui/styles";
import ProjectCard from "../../../../../ui/projectCard/ProjectCard";
import { useState } from "react";
import HomeEnvoy from '../../../../../assets/home-envoy.svg'

const Envoy = () => {
  const [hover, setHover] = useState(false);
  const toggle = () => {
    if (hover === true) {
      return setHover(false);
    }
    setHover(true);
  };

  return (
    <Card flex gap="24px" mdflexdirection="column">
      <ProjectCard
        path="/"
        buttonText="Read Case Study"
        color="#002A66"
        image="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979468/portfolio-assets/envoy-home_w3wtvz.svg"
        projectName="An Attempt to take Humans a step closer to stress-free daily living via Logistics"
        textWidth="414px"
      />
      <Card
        flexratio="1"
        width="100%"
        // mdheight="343px !important"
        // smheight="343px"
        mdpadding="158px 0"
        flex
        justifycontent="center"
        alignitems="center"
        gap="16px"
        flexdirection="column"
        border={`1.5px dashed ${black5}`}
        smradius="0px 0px 16px 16px"
        shadow="2px 4px 38px rgba(0, 0, 0, 0.03)"
      >
        <Text
          style={{ fontWeight: "300" }}
          size="24px"
          lineheight="45px"
          color="#0F3C55"
        >
          Send a mail to book a call
        </Text>

        <LinkText
          to="/"
          display="flex"
          alignitems="center"
          gap="10px"
          padding="16px 32px"
          size="14px"
          border={`1px solid #3D4754`}
          lineheight="normal"
          transition="background 0.5s"
          color="#3D4754"
          hbg="#3D4754"
          hcolor={white}
          radius="200px"
          width="fit-content"
          hshadow="2px 4px 38px rgba(0, 0, 0, 0.03)"
          onMouseEnter={toggle}
          onMouseLeave={toggle}
        >
          <Image src={hover ? "assets/add-light.svg" : "assets/add-dark.svg"} />{" "}
          <Text size="16px" weight="500" color={hover ? white : "#3D4754"}>
            Your Project
          </Text>
        </LinkText>
      </Card>
    </Card>
  );
};

export default Envoy;
