import { black2, Text } from "../styles";

interface ITextProps {
  text?: string;
  span?: string;
  center?: boolean;
  width?: string;
  color?: string;
  size?: string;
  heavy?: boolean;
}

const ProjectText = (props: ITextProps) => {
  const { span, text, center, width, color, size, heavy } = props;
  return (
    <Text
      heavy={heavy}
      size={size ? size : "16px"}
      lineheight="30px"
      width={width}
      mdwidth="100%"
      mdsize=""
      mdlineheight="26px"
      smsize="14px"
      smlineheight="26px"
      color={color ? color : black2}
      center={center ? true : false}
      weight="400"
    >
      {text} <span style={{ color: `${black2}` }}>{span}</span>
    </Text>
  );
};

export default ProjectText;
