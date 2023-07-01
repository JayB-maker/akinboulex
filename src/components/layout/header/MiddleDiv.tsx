import { navDetails } from "../../../../src/data";
import { Card, LinkText, black, black3 } from "../../../../src/ui/styles";

const MiddleDiv = () => {
  const path = window.location.pathname;
  return (
    <Card flex alignitems="center" mddisplay="none">
      <Card flex alignitems="center" gap="56px">
        {navDetails.map((nav, index) => (
          <LinkText
            to={nav.path}
            key={index}
            weight="500"
            size="16px"
            lineheight="23px"
            color={nav.path === path ? black : black3}
            hcolor={black}
            transition="color 0.5s"
          >
            {nav.menu}
          </LinkText>
        ))}
      </Card>
    </Card>
  );
};

export default MiddleDiv;
