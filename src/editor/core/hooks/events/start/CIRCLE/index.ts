import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const circleElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number,
  pageId: string
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    pageId,
    parentId: "DEFAULT",
    isBlocked: false,
    visible: true,
    tool: "CIRCLE",
    rotate: 0,
    height: 100,
    width: 100,
    view_position: count + 1,
    style: {
      backgroundColor: "#ffffff",
      strokeWidth: 0,
      stroke: "#000000",
      isAllBorderRadius: false,
      borderRadius: 0,
      borderRadiusBottomLeft: 0,
      borderRadiusBottomRight: 0,
      borderRadiusTopLeft: 0,
      borderRadiusTopRight: 0,
    },
  };
};
export default circleElementStart;
