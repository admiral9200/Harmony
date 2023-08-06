import { IElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadDraw = (element: IElement | Partial<IElement>) => {
  const line = new Konva.Line({
    x: element?.x,
    y: element?.y,
    points: element?.points,
    stroke: element?.style?.stroke,
    shadowBlur: element?.style?.shadowBlur,
    shadowOpacity: element?.style?.shadowOpacity,
    shadowColor: element?.style?.shadowColor,
    shadowOffsetX: element?.style?.shadowOffset?.x,
    shadowOffsetY: element?.style?.shadowOffset?.y,
    tension: 1,
    globalCompositeOperation: "source-over",
    lineCap: "round",
    lineJoin: "round",
  });
  return line;
};
export default ThreadDraw;
