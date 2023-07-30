import { IElement } from "@/editor/core/elements/type";
import { v4 as uuidv4 } from "uuid";
import { IRelativePosition } from "../../types";

const groupStart = (
  event: IRelativePosition,
  count: number,
  pageId: string
): IElement => {
  const { x, y } = event;
  const id = uuidv4();
  return {
    id,
    x,
    y,
    pageId,
    isBlocked: false,
    groupId: id,
    tool: "GROUP",
    visible: true,
    rotate: 0,
    height: 100,
    width: 100,
    view_position: count + 1,
    style: {
      stroke: "#000000",
      strokeWidth: 0,
      backgroundColor: "#ffffff",
      isAllBorderRadius: false,
      borderRadius: 0,
      borderRadiusBottomLeft: 0,
      borderRadiusBottomRight: 0,
      borderRadiusTopLeft: 0,
      borderRadiusTopRight: 0,
    },
  };
};
export default groupStart;
