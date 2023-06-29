import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 } from "uuid";

const drawElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);
  return {
    id: v4(),
    x,
    y,
    tool: "DRAW",
    rotate: 0,
    height: 100,
    zIndex: count + 1,
    width: 100,
    style: {
      stroke: "#000",
    },
    points: [x, y],
  };
};

export default drawElementStart;
