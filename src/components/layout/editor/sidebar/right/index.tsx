import { IKeyTool } from "@/editor/core/tools/types";
import useElement from "@/hooks/useElement";
import themeColors from "@/themes";
import { AtomWrapper } from "@whil/ui";
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
1;
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
      backgroundColor={`${themeColors.dark}`}
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      height="inherit"
      display="flex"
      className="CursorDefault"
      flexDirection="column"
      customCSS={(css) => css`
        border-left: 1px solid rgba(255, 255, 255, 0.25);
      `}
    >
      {element?.id ? layoutTabs?.[element?.tool] : <StageSidebarRight />}
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarRight;
