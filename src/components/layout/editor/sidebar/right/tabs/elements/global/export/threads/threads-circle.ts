import { IElement, IStyleElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadCircle = (element: IElement | Partial<IElement>) => {
  const { backgroundColor, stroke, strokeWidth } =
    element?.style as IStyleElement;

  const box = new Konva.Rect({
    x: element?.x,
    y: element?.y,
    width: element?.width,
    height: element?.width,
    fill: backgroundColor,
    stroke: stroke,
    strokeWidth: strokeWidth,
    rotation: element?.rotate,
    shadowBlur: element?.style?.shadowBlur,
    shadowOpacity: element?.style?.shadowOpacity,
    shadowColor: element?.style?.shadowColor,
    shadowOffsetX: element?.style?.shadowOffset?.x,
    shadowOffsetY: element?.style?.shadowOffset?.y,
    cornerRadius: Number(element?.width) + Number(element?.height) / 2,
  });
  return box;
};
export default ThreadCircle;
