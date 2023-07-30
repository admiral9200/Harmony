import { IElement } from "@/editor/core/elements/type";
import { v4 as uuidv4 } from "uuid";
import { IRelativePosition } from "../../types";

const imageElementStart = (
  event: IRelativePosition,
  count: number,
  pageId: string,
  groupId: string
): IElement => {
  const { x, y } = event;
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
