import { IElement, IStyleElement } from "@/editor/core/elements/type";
import Konva from "konva";

const ThreadImg = (element: IElement | Partial<IElement>) => {
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
    // stroke: stroke,
    // rotation: element?.rotate,
    // strokeWidth: strokeWidth,
    // cornerRadius: isAllBorderRadius
    //   ? Array(4).fill(borderRadius)
    //   : [
    //       borderRadiusTopLeft,
    //       borderRadiusTopRight,
    //       borderRadiusBottomRight,
    //       borderRadiusBottomLeft,
    //     ],
  });
  return box;
};

export default ThreadImg;
