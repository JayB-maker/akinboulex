import { Card, LinkText, Text, black3 } from "../../../../src/ui/styles";

const LeftDiv = () => {
  return (
    <Card flex alignitems="center" gap="40px">
      <LinkText to="/">
        <Card flex flexdirection="column" gap="2px">
          <Text size="16px" color={black3} weight="500">
            BOLUWATIFE
          </Text>
          <Text size="16px" color={black3} weight="500">
            AKINLABI
          </Text>
        </Card>
      </LinkText>
    </Card>
  );
};

export default LeftDiv;
