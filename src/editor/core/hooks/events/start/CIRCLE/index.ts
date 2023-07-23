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
    visible: true,
    tool: "CIRCLE",
    rotate: 0,
    height: 100,
    width: 100,
    // text: uuidv4().slice(0, 4),
    zIndex: count + 1,
    view_position: count + 1,
    style: {
      backgroundColor: "#ffffff",
      stroke: "#000",
    },
  };
};
export default circleElementStart;
