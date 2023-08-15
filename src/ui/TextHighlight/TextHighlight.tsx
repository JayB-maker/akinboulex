import MainText from "../mainText";
import { Card } from "../styles";

interface ITextProps {
  text?: string;
  span?: string;
  center?: boolean;
  width?: string;
  color?: string;
  size?: string;
  lineheight?: string;
  heavy?: boolean;
}

const TextHighlight = (props: ITextProps) => {
  const { size, text, lineheight, color } = props;
  return (
    <Card padding="8px 16px" bg="#33333315" bdleft="3px solid #333333">
      <MainText text={text} size={size} lineheight={lineheight} color={color} />
    </Card>
  );
};

export default TextHighlight;
