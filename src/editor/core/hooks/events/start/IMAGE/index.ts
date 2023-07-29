import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const imageElementStart = (
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
    visible: true,
    tool: "IMAGE",
    style: {
      backgroundColor: "#ffffff",
      strokeWidth: 0,
      stroke: "#000000",
      isAllBorderRadius: false,
      borderRadius: 0,
      borderRadiusBottomLeft: 0,
      borderRadiusBottomRight: 0,
      borderRadiusTopLeft: 0,
      borderRadiusTopRight: 0,
    },
    view_position: count + 1,
    src: "https://picsum.photos/200/300",
    rotate: 0,
    height: 100,
    width: 100,
  };
};
export default imageElementStart;
