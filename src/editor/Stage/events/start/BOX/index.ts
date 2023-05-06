import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import { getRandomColor } from "@/utils/randomColor";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const boxElementStart = (event: KonvaEventObject<MouseEvent>): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    tool: "BOX",
    rotate: 0,
    height: 100,
    width: 100,
    style: {
      backgroundColor: getRandomColor(),
    },
  };
};
export default boxElementStart;
