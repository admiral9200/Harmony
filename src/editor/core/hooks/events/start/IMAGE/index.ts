import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const imageElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    visible: true,
    tool: "IMAGE",
    style: {
      backgroundColor: "#ffffff",
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
