import { isPartialBorderRadius } from "@/editor/core/elements/BOX";
import {
  IElement,
  IFCElement,
  IStyleElement,
} from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadBox = (element: IElement | Partial<IElement>) => {
  const { stroke, strokeWidth } = element?.style as IStyleElement;
  const box = new Konva.Rect({
    x: element?.x,
    y: element?.y,
    width: element?.width,
    height: element?.height,
    fill: element?.style?.backgroundColor,
    stroke: stroke,
    strokeWidth: strokeWidth,
    shadowBlur: element?.style?.shadowBlur,
    shadowColor: element?.style?.shadowColor,
    shadowOpacity: element?.style?.shadowOpacity,
    shadowOffsetX: element?.style?.shadowOffset?.x,
    shadowOffsetY: element?.style?.shadowOffset?.y,
    rotation: element?.rotate,
    cornerRadius: isPartialBorderRadius(element as IFCElement)?.cornerRadius,
  });
  return box;
};
export default ThreadBox;
