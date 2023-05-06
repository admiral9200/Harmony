import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import { getRandomColor } from "@/utils/randomColor";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const circleElementStart = (event: KonvaEventObject<MouseEvent>): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    tool: "CIRCLE",
    rotate: 0,
    // text: uuidv4().slice(0, 4),
    style: {
      backgroundColor: getRandomColor(),
    },
    height: 1,
    width: 1,
  };
};
export default circleElementStart;
