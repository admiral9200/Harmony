import { AtomText, AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";
import ElementsList from "./elements";

const LayoutEditorSidebarLeft: FC = () => {
  return (
    <AtomWrapper
      backgroundColor="#0d0e0e"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="1.3rem"
    >
      <AtomText
        color="white"
        fontWeight="bold"
        fontSize="17px"
        margin="0px 0px 15px 0px"
      >
        Elements
      </AtomText>
      <ElementsList />
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarLeft;
