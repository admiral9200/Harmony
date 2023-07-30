import { IElement } from "@/editor/core/elements/type";
import { v4 } from "uuid";
import { IRelativePosition } from "../../types";

const drawElementStart = (
  event: IRelativePosition,
  count: number,
  pageId: string,
  groupId: string
): IElement => {
  const { x, y } = event;
  return {
    id: v4(),
    x,
    y,
    pageId,
    isBlocked: false,
    groupId,
    tool: "DRAW",
    visible: true,
    rotate: 0,
    height: 100,
    view_position: count + 1,
    width: 100,
    style: {
      stroke: "#000",
      strokeWidth: 1,
      backgroundColor: "#ffffff",
    },
    points: [x, y],
  };
};

export default drawElementStart;
