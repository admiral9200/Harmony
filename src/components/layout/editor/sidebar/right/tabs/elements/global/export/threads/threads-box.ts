import { IElement, IStyleElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadBox = (element: IElement | Partial<IElement>) => {
  const {
    backgroundColor,
    stroke,
    strokeWidth,
    isAllBorderRadius,
    borderRadius,
    borderRadiusBottomLeft,
    borderRadiusBottomRight,
    borderRadiusTopLeft,
    borderRadiusTopRight,
  } = element?.style as IStyleElement;

  const box = new Konva.Rect({
    x: 0,
    y: 0,
    width: element?.width,
    height: element?.height,
    fill: backgroundColor,
    stroke: stroke,
    rotation: 0,
    strokeWidth: strokeWidth,
    cornerRadius: isAllBorderRadius
      ? Array(4).fill(borderRadius)
      : [
          borderRadiusTopLeft,
          borderRadiusTopRight,
          borderRadiusBottomRight,
          borderRadiusBottomLeft,
        ],
  });
  return box;
};
export default ThreadBox;
