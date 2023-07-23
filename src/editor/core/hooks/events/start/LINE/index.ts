import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const lineElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    tool: "LINE",
    visible: true,
    text: "",
    style: {
      stroke: "#000",
      strokeWidth: 4,
    },
    zIndex: count + 1,
    view_position: count + 1,
    rotate: 0,
    height: 100,
    width: 400,
  };
};
export default lineElementStart;
