import { IElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadDraw = (element: IElement | Partial<IElement>) => {
  const line = new Konva.Line({
    x: 0,
    y: 0,
    points: element?.points,
    stroke: "red",
    tension: 1,
  });
  return line;
};
export default ThreadDraw;
