import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const textElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    tool: "TEXT",
    rotate: 0,
    text: uuidv4().slice(0, 4),
    style: {
      colorText: "#000",
      fontStyle: "normal",
      fontSize: 12,
    },
    zIndex: count + 1,
    height: 100,
    width: 100,
  };
};
export default textElementStart;
