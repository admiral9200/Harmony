import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 } from "uuid";

const drawElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number,
  pageId: string
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);
  return {
    id: v4(),
    x,
    y,
    pageId,
    isBlocked: false,
    parentId: "DEFAULT",
    tool: "DRAW",
    visible: true,
    rotate: 0,
    height: 100,
    view_position: count + 1,
    width: 100,
    style: {
      stroke: "#000",
      strokeWidth: 1,
      backgroundColor: "#ffffff",
    },
    points: [x, y],
  };
};

export default drawElementStart;
