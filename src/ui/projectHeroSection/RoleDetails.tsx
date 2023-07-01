import { Card, Text, black1, black4 } from "../styles";

interface IRoleDetailsProps {
  title: string;
  details: Array<string>;
}

const RoleDetails = (props: IRoleDetailsProps) => {
  const { details, title } = props;
  return (
    <Card flex flexdirection="column" gap="8px">
      <Text
        size="16px"
        lineheight="30px"
        color={black4}
        weight="400"
        smsize=""
        smlineheight=""
      >
        {title}
      </Text>
      <Card flex flexdirection="column" gap="8px">
        {details.map((subDetails, index) => (
          <Text
            size="16px"
            lineheight="30px"
            color={black1}
            weight="400"
            smsize=""
            smlineheight=""
            key={index}
          >
            {subDetails}
          </Text>
        ))}
      </Card>
    </Card>
  );
};

export default RoleDetails;
