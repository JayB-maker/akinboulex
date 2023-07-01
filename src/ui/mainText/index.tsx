import { black, black3, Text } from "../styles";

interface ITextProps {
  text?: string;
  span?: string;
  center?: boolean;
  width?: string;
  color?: string;
  size?: string;
  heavy?: boolean;
}

const MainText = (props: ITextProps) => {
  const { span, text, center, width, color, size, heavy } = props;
  return (
    <Text
      heavy={heavy}
      size={size ? size : "24px"}
      lineheight="45.6px"
      width={width}
      mdwidth="100%"
      mdsize=""
      mdlineheight="26px"
      smsize="14px"
      smlineheight="26px"
      color={color ? color : black}
      center={center ? true : false}
      weight="400"
    >
      {text} <span style={{ color: `${black3}` }}>{span}</span>
    </Text>
  );
};

export default MainText;
