import {
  Card,
  Image,
  InnerSection,
  LinkText,
  MainSection,
  black,
  black3,
  white,
} from "../../../../src/ui/styles";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";
import MiddleDiv from "./MiddleDiv";
import { useState } from "react";
import { navDetails } from "../../../data";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const path = window.location.pathname;
  return (
    <>
      <MainSection
        width="100%"
        bg={mobileNav ? white : "unset"}
        height={mobileNav ? "100vh" : "unset"}
        position={mobileNav ? "fixed" : "unset"}
        top="0"
        left="0"
        index="100"
        shadow="2px 6px 38px rgba(15, 15, 15, 0.08)"
        style={{backgroundImage: `${mobileNav ? 'url("../public/assets/backgroundLine.svg")' : "unset"}`}}
      >
        <InnerSection>
          <Card
            flex
            justifycontent="space-between"
            alignitems="center"
            padding="24px 0"
          >
            <LeftDiv />
            <MiddleDiv />
            <RightDiv />
            <Card
              pointer
              display="none"
              mddisplay="block"
              onClick={() => setMobileNav(!mobileNav)}
            >
              <Image
                src={mobileNav ? "assets/close.svg" : "assets/open.svg"}
                alt={mobileNav ? "close" : "open"}
              />
            </Card>
          </Card>
        </InnerSection>
        {mobileNav && (
          <>
            <InnerSection>
              <Card
                flexdirection="column"
                alignitems="center"
                gap="48px"
                padding="24px 0"
                display="none"
                mddisplay="flex"
              >
                {navDetails.map((nav, index) => (
                  <LinkText
                    to={nav.path}
                    size="18px"
                    lineheight="24px"
                    color={nav.path === path ? black : black3}
                    key={index}
                  >
                    {nav.menu}
                  </LinkText>
                ))}
              </Card>
            </InnerSection>
          </>
        )}
      </MainSection>
    </>
  );
};

export default Header;
