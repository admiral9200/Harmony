import { IKeyTool } from "@/editor/core/tools/types";
import useTool from "@/hooks/useTool";
import { FC } from "react";
import StageSidebarRight from "./stage";

type LayoutsTabs = {
  [key in IKeyTool]?: FC;
};

const layoutTabs: LayoutsTabs = {
  MOVE: StageSidebarRight,
};

const SidebarTabsRight: FC = () => {
  const { tool } = useTool();
  const Components = layoutTabs?.[tool] as FC;
  return <Components />;
};

export default SidebarTabsRight;
