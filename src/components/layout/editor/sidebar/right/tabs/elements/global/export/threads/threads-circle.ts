import { IElement, IStyleElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadCircle = (element: IElement | Partial<IElement>) => {
  const { backgroundColor, stroke, strokeWidth } =
    element?.style as IStyleElement;

  const box = new Konva.Rect({
    x: element?.x,
    y: element?.y,
    width: element?.width,
    height: element?.height,
    fill: backgroundColor,
    stroke: stroke,
    rotation: 0,
    strokeWidth: strokeWidth,
    shadowBlur: element?.style?.shadowBlur,
    cornerRadius: Number(element?.width) + Number(element?.height) / 2,
  });
  return box;
};
export default ThreadCircle;
