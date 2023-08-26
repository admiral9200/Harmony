import useElement from "@/editor/core/hooks/element/hook";
import { IKeyTool } from "@/editor/core/hooks/tool/types";
import themeColors from "@/themes";
import { AtomWrapper } from "@whil/ui";
import { FC } from "react";
import SidebarRightBox from "./tabs/elements/BOX/sidebar-box";
import SidebarIMG from "./tabs/elements/IMG/sidebar-img";
import SidebarText from "./tabs/elements/TEXT/sidebar-text";
import SidebarBorderFC from "./tabs/elements/global/border/border";
import SidebarExportFC from "./tabs/elements/global/export/export";
import SidebarFillFC from "./tabs/elements/global/fill/fill";
import SidebarResolutionsFC from "./tabs/elements/global/resolution/resolution";
import SidebarShadowFC from "./tabs/elements/global/shadow/shadow";
import SidebarStrokeFC from "./tabs/elements/global/stroke/stroke";
import StageSidebarRight from "./tabs/stage";

type LayoutsTabs = {
  [key in IKeyTool]?: FC;
};
const layoutTabs: LayoutsTabs = {
  BOX: SidebarRightBox,
  IMAGE: SidebarIMG,
  TEXT: SidebarText,
};

const propertiesElements = (tool: IKeyTool) => [
  {
    Component: SidebarResolutionsFC,
  },
  {
    Component: layoutTabs?.[`${tool}`],
  },
  {
    Component: SidebarFillFC,
  },
  {
    Component: SidebarStrokeFC,
  },
  {
    Component: SidebarBorderFC,
  },
  {
    Component: SidebarShadowFC,
  },
  {
    Component: SidebarExportFC,
  },
];

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

        overflow: hidden;
        overflow-x: hidden;
        overflow-y: scroll;

        ::-webkit-scrollbar {
          width: 6px;
        }
        &:hover {
          overflow-y: scroll;

          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-thumb {
            background: #ffffff67;
            border-radius: 99px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: ${themeColors.white};
            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
          }
        }
      `}
    >
      {element?.id ? (
        <>
          {propertiesElements?.(`${element?.tool as IKeyTool}`)?.map(
            ({ Component }) => (
              <>
                {Component ? (
                  <>
                    <Component />
                    <AtomWrapper
                      width="100%"
                      height="auto"
                      customCSS={(css) => css`
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                      `}
                    ></AtomWrapper>
                  </>
                ) : null}
              </>
            )
          )}
        </>
      ) : (
        <StageSidebarRight />
      )}
    </AtomWrapper>
  );
};

export default LayoutEditorSidebarRight;
