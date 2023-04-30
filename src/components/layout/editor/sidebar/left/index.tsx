import { AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";
import ElementsList from "./elements";

const LayoutEditorSidebarLeft: FC = () => {
  return (
    <AtomWrapper
      backgroundColor="#202020"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="1.3rem"
    >
      <ElementsList />
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarLeft;
