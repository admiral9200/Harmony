import { IElement } from "@/editor/core/elements/type";
import { v4 as uuidv4 } from "uuid";
import { IRelativePosition } from "../../types";

const codeStartInitial = (
  event: IRelativePosition,
  count: number,
  pageId: string,
  groupId: string
): IElement => {
  const { x, y } = event;
  const id = uuidv4();
  return {
    id,
    x,
    y,
    pageId,
    groupId,
    isBlocked: false,
    tool: "CODE",
    visible: true,
    rotate: 0,
    height: 300,
    width: 500,
    view_position: count + 1,
    style: {
      stroke: "#ffffff",
      strokeWidth: 0,
      backgroundColor: "#263238",
      fontWeight: 400,
      fontFamily: "Roboto",
      fontStyle: "normal",
      colorText: "#ffffff",
      shadowBlur: 0,
      shadowColor: "#ffffff",
      shadowOffset: {
        x: 0,
        y: 0,
      },
      shadowOpacity: 1,
      isAllBorderRadius: false,
      borderRadius: 0,
      borderRadiusBottomLeft: 12,
      borderRadiusBottomRight: 12,
      borderRadiusTopLeft: 12,
      borderRadiusTopRight: 12,
    },
  };
};
export default codeStartInitial;
