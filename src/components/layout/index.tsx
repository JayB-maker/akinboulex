import { Card } from "../../../src/ui/styles";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Card>{children}</Card>
      <Footer />
    </>
  );
};

export default Layout;
