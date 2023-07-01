import { Image, LinkText, Text, black2, white2, white5 } from "../styles";

interface IPrototypeButtonProps {
  path: string;
  image?: string;
  buttonText?: string;
}

const PrototypeButton = (props: IPrototypeButtonProps) => {
  const { path, buttonText, image } = props;
  return (
    <LinkText
      to={path}
      display="flex"
      alignitems="center"
      gap="10px"
      padding="16px 32px"
      bg={white2}
      size="14px"
      border={`1px solid ${white5}`}
      lineheight="normal"
      transition="background 0.5s"
      color="#3D4754"
    //   hbg="#3D4754"
    //   hcolor={white}
      radius="50px"
      width="fit-content"
      hshadow="2px 4px 38px rgba(0, 0, 0, 0.03)"
    >
      <Image src={image} />
      <Text size="16px" weight="500" color={black2}>
        {buttonText}
      </Text>
    </LinkText>
  );
};

export default PrototypeButton;
