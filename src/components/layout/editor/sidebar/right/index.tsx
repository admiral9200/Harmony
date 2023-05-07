import { AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";
import SidebarTabsRight from "./tabs";

const LayoutEditorSidebarRight: FC = () => {
  return (
    <AtomWrapper
      backgroundColor="#202020"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="1.3rem"
    >
      <SidebarTabsRight />
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarRight;
