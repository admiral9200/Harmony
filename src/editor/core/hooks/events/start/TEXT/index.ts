import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const textElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number,
  pageId: string,
  groupId: string
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    pageId,
    isBlocked: false,
    groupId,
    tool: "TEXT",
    rotate: 0,
    visible: true,
    text: uuidv4().slice(0, 4),
    style: {
      backgroundColor: "#000",
      stroke: "#000",
      strokeWidth: 0,
      colorText: "#000",
      fontStyle: "normal",
      fontWeight: 400,
      fontFamily: "Roboto",
      fontSize: 12,
    },
    view_position: count + 1,
    height: 100,
    width: 100,
  };
};
export default textElementStart;
