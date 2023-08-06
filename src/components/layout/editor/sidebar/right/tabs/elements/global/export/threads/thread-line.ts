import { isPartialBorderRadius } from "@/editor/core/elements/BOX";
import { IElement, IFCElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadLine = (element: IElement | Partial<IElement>) => {
  const line = new Konva.Rect({
    id: element?.id,
    x: element?.x,
    y: element?.y,
    fill: element?.style?.stroke,
    height: element?.height,
    width: element?.width,
    shadowBlur: element?.style?.shadowBlur,
    shadowColor: element?.style?.shadowColor,
    shadowOpacity: element?.style?.shadowOpacity,
    shadowOffsetX: element?.style?.shadowOffset?.x,
    shadowOffsetY: element?.style?.shadowOffset?.y,
    cornerRadius: isPartialBorderRadius(element as IFCElement)?.cornerRadius,
  });
  return line;
};

export default ThreadLine;
