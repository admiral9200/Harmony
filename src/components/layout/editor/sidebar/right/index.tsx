import useElement from "@/editor/core/hooks/element/hook";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomWrapper } from "@whil/ui";
import { FC } from "react";
import SidebarRightBox from "./tabs/elements/BOX/sidebar-box";
import StageSidebarRight from "./tabs/stage";

type LayoutsTabs = {
  [key in IKeyTool]?: JSX.Element;
};
const layoutTabs: LayoutsTabs = {
  BOX: <SidebarRightBox />,
  // CIRCLE: <LayoutSidebarRightStageTabElementCircle />,
  // LINE: <LayoutSidebarRightStageTabElementLine />,
  // IMAGE: <LayoutSidebarRightStageTabElementImage />,
  // TEXT: <LayoutSidebarRightStageTabElementText />,
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
      {element?.id ? (
        layoutTabs?.[`${element?.tool}` as IKeyTool]
      ) : (
        <StageSidebarRight />
      )}
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarRight;
