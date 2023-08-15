import { black, black1, Text } from "../styles";

interface ITextProps {
  title?: string;
  span?: string;
  center?: boolean;
  width?: string;
  color?: string;
  size?: string;
  smSize?: string;
  heavy?: boolean;
  lineheight?: string;
}

const MainTitle = (props: ITextProps) => {
  const { span, title, center, width, color, size, smSize, heavy, lineheight } = props;
  return (
    <Text
      heavy={heavy}
      size={size ? size : "40px"}
      lineheight={lineheight ? lineheight : "76px"}
      width={width}
      mdwidth="100%"
      mdsize=""
      mdlineheight=""
      smsize={smSize ? smSize : "32px"}
      smlineheight="60.8px"
      color={color ? color : black}
      center={center ? true : false}
      weight="400"
    >
      {title} <span style={{ color: `${black1}` }}>{span}</span>
    </Text>
  );
};

export default MainTitle;
