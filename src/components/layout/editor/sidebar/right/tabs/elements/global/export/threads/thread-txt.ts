import { IElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadText = (element: IElement | Partial<IElement>) => {
  const text = new Konva.Text({
    x: 0,
    y: 0,
    id: element?.id,
    width: element?.width,
    height: element?.height,
    fontSize: element?.style?.fontSize,
    fontStyle: element?.style?.fontStyle,
    textDecoration: element?.style?.textDecoration,
    fill: element?.style?.colorText,
    text: element?.text ?? element?.id,
  });
  return text;
};

export default ThreadText;
