import { IKeyTool } from "@/editor/core/tools/types";
import useElement from "@/hooks/useElement";
import { AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";
import LayoutSidebarRightStageTabElementBox from "./tabs/elements/BOX";
import StageSidebarRight from "./tabs/stage";

type LayoutsTabs = {
  [key in IKeyTool]?: JSX.Element;
};

const layoutTabs: LayoutsTabs = {
  BOX: <LayoutSidebarRightStageTabElementBox />,
};

const LayoutEditorSidebarRight: FC = () => {
  const { element } = useElement();
  return (
    <AtomWrapper
      backgroundColor="#202020"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="1.3rem"
    >
      {element?.id ? layoutTabs?.[element?.tool] : <StageSidebarRight />}
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarRight;
