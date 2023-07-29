import { IElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadLine = (element: IElement | Partial<IElement>) => {
  const line = new Konva.Line({
    id: element?.id,
    x: element?.x,
    y: element?.y,
    fill: element?.style?.stroke,
    height: element?.height,
    width: element?.width,
    shadowBlur: element?.style?.shadowBlur,
  });
  return line;
};

export default ThreadLine;
