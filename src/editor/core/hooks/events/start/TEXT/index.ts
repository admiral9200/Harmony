import { IElement } from "@/editor/core/elements/type";
import { v4 as uuidv4 } from "uuid";
import { IRelativePosition } from "../../types";

const textElementStart = (
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
