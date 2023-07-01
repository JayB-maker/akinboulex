import { Card, LinkText, black, black3 } from "../../../../../src/ui/styles";

const socialMediaDetails = [
  {
    handle: "Twitter",
    path: "/",
  },
  {
    handle: "LinkedIn",
    path: "/",
  },
  {
    handle: "Instagram",
    path: "/",
  },
];

const SocialMedia = () => {
  return (
    <Card flex gap="72px" smgap="32px">
      {socialMediaDetails.map((detail, index) => (
        <LinkText
          to={detail.path}
          key={index}
          weight="400"
          size="16px"
          smsize="14px"
          lineheight="30px"
          color={black3}
          hcolor={black}
          transition="color 0.5s"
        >
          {detail.handle}
        </LinkText>
      ))}
    </Card>
  );
};

export default SocialMedia;
