import LayoutEditorSidebarLeft from "@/components/layout/editor/sidebar/left";
import LayoutEditorSidebarRight from "@/components/layout/editor/sidebar/right";
import themeColors from "@/themes";
import { AtomText, AtomWrapper } from "@whil/ui";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LayoutEditor: FC<Props> = ({ children }) => {
  return (
    <AtomWrapper
      height="100%"
      flexDirection="row"
      width="100%"
      justifyContent="flex-start"
      customCSS={(css) => css`
        display: grid;
        grid-template-columns: 240px 1fr 240px;
        grid-template-rows: 1fr 1fr;
        height: 100vh;
        min-height: 100vh;
        overflow: hidden;
        position: relative;
      `}
    >
      <AtomWrapper
        customCSS={(css) => css`
          grid-column: 1 / 4;
          grid-row: 1;
          background-color: ${themeColors.dark};
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          padding: 0.6em;
        `}
        alignItems="center"
        justifyContent="center"
      >
        <AtomWrapper alignItems="center" justifyContent="center">
          <AtomText color="white" fontWeight={"bold"}>
            Harmony
          </AtomText>
        </AtomWrapper>
      </AtomWrapper>
      <LayoutEditorSidebarLeft />
      {children}
      <LayoutEditorSidebarRight />
    </AtomWrapper>
  );
};

export default LayoutEditor;
