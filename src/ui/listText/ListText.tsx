import MainText from "../mainText";
import { Card, black1 } from "../styles";

interface ITextProps {
  text?: string;
  span?: string;
  center?: boolean;
  width?: string;
  color?: string;
  size?: string;
  heavy?: boolean;
  lineheight?: string;
}

const ListText = (props: ITextProps) => {
  const { text, width, color, size, heavy, lineheight } = props;
  return (
    <Card flex gap="10px" padding="0 0 0 10px">
      <Card width="5px" height="5px" bg={black1} margin="12px 0 0" />
      <MainText
        size={size}
        width={width}
        color={color}
        lineheight={lineheight}
        text={text}
        heavy={heavy}
      />
    </Card>
  );
};

export default ListText;
