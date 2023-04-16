import { AtomText } from "lucy-nxtjs";
import { NextReadPage } from "next";

const PageIndexHome: NextReadPage = () => {
  return <AtomText>HELLO</AtomText>;
};
PageIndexHome.Layout = "public";
export default PageIndexHome;
