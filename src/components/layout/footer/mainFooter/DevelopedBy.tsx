import { Card, LinkText, Text, black5 } from "../../../../../src/ui/styles";

const DevelopedBy = () => {
  return (
    <Card width="100%" flex justifycontent="space-between" alignitems="center">
      <Text size="16px" lineheight="30px" weight="400" color={black5}>
        Developed by —{" "}
      </Text>
      <LinkText to="" weight="400">
        JayB
      </LinkText>
    </Card>
  );
};

export default DevelopedBy;
