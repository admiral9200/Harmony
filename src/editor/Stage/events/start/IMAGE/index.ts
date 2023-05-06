import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import { getRandomColor } from "@/utils/randomColor";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const imageElementStart = (event: KonvaEventObject<MouseEvent>): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    tool: "IMAGE",
    // text: uuidv4().slice(0, 4),
    style: {
      stroke: getRandomColor(),
      strokeWidth: 4,
    },
    src: "https://picsum.photos/200/300",
    rotate: 0,
    height: 0,
    width: 0,
  };
};
export default imageElementStart;
