import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import { getRandomColor } from "@/utils/randomColor";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const imageElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    tool: "IMAGE",
    style: {
      stroke: getRandomColor(),
      strokeWidth: 0,
    },
    zIndex: count + 1,
    src: "https://picsum.photos/200/300",
    rotate: 0,
    height: 1,
    width: 1,
  };
};
export default imageElementStart;
