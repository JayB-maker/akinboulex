import {
  LinkText,
  black0,
  black3,
  white5,
} from "../../../../src/ui/styles";

const RightDiv = () => {
  return (
    <LinkText
      to="mailto:ajiboyeabiodun001@gmail.com"
      padding="16px 32px"
      size="14px"
      border={`1px solid ${black3}`}
      lineheight="normal"
      transition="background 0.5s"
      hbg={white5}
      color={black0}
      radius="232px"
      mddisplay="none"
    >
      Contact
    </LinkText>
  );
};

export default RightDiv;
