import useElement from "@/editor/core/hooks/element/hook";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomText, AtomWrapper } from "@whil/ui";
import { FC } from "react";
import SidebarRightBox from "./tabs/elements/BOX/sidebar-box";
import SidebarExportFC from "./tabs/elements/global/export/export";
import SidebarFillFC from "./tabs/elements/global/fill/fill";
import SidebarResolutionsFC from "./tabs/elements/global/resolution/resolution";
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
        <>
          <AtomWrapper padding="0.5em 0.7em">
            <AtomText color="white" fontWeight="bold" fontSize="0.8em">
              Properties
            </AtomText>
          </AtomWrapper>
          <AtomWrapper
            width="100%"
            height="auto"
            customCSS={(css) => css`
              border-bottom: 1px solid rgba(255, 255, 255, 0.25);
            `}
          ></AtomWrapper>
          <SidebarResolutionsFC />
          <AtomWrapper
            width="100%"
            height="auto"
            customCSS={(css) => css`
              border-bottom: 1px solid rgba(255, 255, 255, 0.25);
            `}
          ></AtomWrapper>
          <SidebarFillFC />
          <AtomWrapper
            width="100%"
            height="auto"
            customCSS={(css) => css`
              border-bottom: 1px solid rgba(255, 255, 255, 0.25);
            `}
          ></AtomWrapper>
          {layoutTabs?.[`${element?.tool}` as IKeyTool]}
          <AtomWrapper
            width="100%"
            height="auto"
            customCSS={(css) => css`
              border-bottom: 1px solid rgba(255, 255, 255, 0.25);
            `}
          ></AtomWrapper>
          <SidebarExportFC />
        </>
      ) : (
        <StageSidebarRight />
      )}
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarRight;
