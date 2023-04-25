import { AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";

const LayoutEditorSidebarLeft: FC = () => {
  return (
    <AtomWrapper
      backgroundColor="#202020"
      justifyContent="flex-start"
      padding="1.3rem"
    >
      <AtomText color="white">LayoutEditorSidebarLeft</AtomText>
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarLeft;
