import { Card, Image, LinkText, TitleText, white, white1 } from "../styles";

interface IProjectCardProps {
  image?: any;
  projectName?: string;
  color?: string;
  buttonText?: string;
  textWidth?: string;
  path: string;
}

const ProjectCard = (props: IProjectCardProps) => {
  const { buttonText, color, image, path, projectName, textWidth } = props;
  return (
    <Card
      flex
      flexdirection="column"
      flexratio="1"
      radius="0px 0px 16px 16px"
      mdradius="16px 16px 0px 0px"
      overflow="hidden"
      border={`1px solid ${white1}`}
      bg={white}
      shadow="2px 4px 38px rgba(0, 0, 0, 0.03)"
      filter="drop-shadow(2px 4px 38px rgba(0, 0, 0, 0.03))"
    >
      <Image src={image} width="100%" alt={projectName} />
      <Card padding="32px 24px" flex flexdirection="column" gap="24px">
        <TitleText
          size="24px"
          smsize="16px"
          smlineheight="23px"
          lineheight="34px"
          weight="500"
          color={color}
          width={textWidth}
          mdwidth="100%"
        >
          {projectName}
        </TitleText>
        <LinkText
          to={path}
          padding="16px 32px"
          size="14px"
          smpadding="16px 24px"
          border={`1px solid ${color}`}
          lineheight="normal"
          transition="background 0.5s"
          hbg={color}
          hcolor={white}
          color={color}
          radius="200px"
          width="fit-content"
        >
          {buttonText}
        </LinkText>
      </Card>
    </Card>
  );
};

export default ProjectCard;
