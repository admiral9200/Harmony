import { IKeyTool } from "@/editor/core/tools/types";
import useElement from "@/hooks/useElement";
import { AtomWrapper } from "lucy-nxtjs";
import { FC } from "react";
import LayoutSidebarRightStageTabElementBox from "./tabs/elements/BOX";
import LayoutSidebarRightStageTabElementCircle from "./tabs/elements/CIRCLE";
import LayoutSidebarRightStageTabElementImage from "./tabs/elements/IMAGE";
import LayoutSidebarRightStageTabElementLine from "./tabs/elements/LINE";
import LayoutSidebarRightStageTabElementText from "./tabs/elements/TEXT";
import StageSidebarRight from "./tabs/stage";

type LayoutsTabs = {
  [key in IKeyTool]?: JSX.Element;
};

const layoutTabs: LayoutsTabs = {
  BOX: <LayoutSidebarRightStageTabElementBox />,
  CIRCLE: <LayoutSidebarRightStageTabElementCircle />,
  LINE: <LayoutSidebarRightStageTabElementLine />,
  IMAGE: <LayoutSidebarRightStageTabElementImage />,
  TEXT: <LayoutSidebarRightStageTabElementText />,
};

const LayoutEditorSidebarRight: FC = () => {
  const { element } = useElement();
  return (
    <AtomWrapper
      backgroundColor="#0d0e0e"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="1.3rem"
    >
      {element?.id ? layoutTabs?.[element?.tool] : <StageSidebarRight />}
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarRight;
