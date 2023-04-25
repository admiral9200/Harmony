import LayoutEditorSidebarLeft from "@/components/layout/editor/sidebar/left";
import LayoutEditorSidebarRight from "@/components/layout/editor/sidebar/right";
import LayoutEditorTop from "@/components/layout/editor/sidebar/top";
import { AtomWrapper } from "lucy-nxtjs";
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
        height: 100vh;
        overflow: none;
        display: grid;
        grid-template-columns: 240px 1fr 240px;
        grid-template-rows: 1fr 1fr;
      `}
    >
      <LayoutEditorTop />
      <LayoutEditorSidebarLeft />
      {children}
      <LayoutEditorSidebarRight />
    </AtomWrapper>
  );
};

export default LayoutEditor;
