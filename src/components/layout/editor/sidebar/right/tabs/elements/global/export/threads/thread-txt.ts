import { IElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadText = (element: IElement | Partial<IElement>) => {
  const text = new Konva.Text({
    x: element?.x,
    y: element?.y,
    id: element?.id,
    width: element?.width,
    height: element?.height,
    fontSize: element?.style?.fontSize,
    fontFamily: `${element?.style?.fontFamily}-${element?.style?.fontStyle}-${element?.style?.fontWeight}`,
    textDecoration: element?.style?.textDecoration,
    shadowColor: element?.style?.shadowColor,
    shadowOpacity: element?.style?.shadowOpacity,
    shadowOffsetX: element?.style?.shadowOffset?.x,
    shadowOffsetY: element?.style?.shadowOffset?.y,
    shadowBlur: element?.style?.shadowBlur,
    stroke: element?.style?.stroke,
    strokeWidth: element?.style?.strokeWidth,
    fill: element?.style?.backgroundColor,
    text: element?.text ?? element?.id,
  });
  return text;
};

export default ThreadText;
