import { isPartialBorderRadius } from "@/editor/core/elements/BOX";
import {
  IElement,
  IFCElement,
  IStyleElement,
} from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadImg = (element: IElement | Partial<IElement>) => {
  const { backgroundColor, stroke, strokeWidth } =
    element?.style as IStyleElement;

  const image = new Image();

  image.src = element.src as string;
  image.crossOrigin = "Anonymous";

  const box = new Konva.Image({
    x: element?.x,
    y: element?.y,
    width: element?.width,
    height: element?.height,
    image,
    fill: backgroundColor,
    rotation: 0,
    stroke: stroke,
    strokeWidth: strokeWidth,
    shadowBlur: element?.style?.shadowBlur,
    shadowColor: element?.style?.shadowColor,
    shadowOpacity: element?.style?.shadowOpacity,
    shadowOffsetX: element?.style?.shadowOffset?.x,
    shadowOffsetY: element?.style?.shadowOffset?.y,
    cornerRadius: isPartialBorderRadius(element as IFCElement)?.cornerRadius,
  });
  return box;
};

export default ThreadImg;
