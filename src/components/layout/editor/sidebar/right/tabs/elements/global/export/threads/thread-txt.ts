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
    fill: element?.style?.backgroundColor,
    text: element?.text ?? element?.id,
  });
  return text;
};

export default ThreadText;
