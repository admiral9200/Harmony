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

  console.log(element.src, " element.src");

  image.src = element.src as string;
  image.crossOrigin = "Anonymous";

  const box = new Konva.Image({
    x: 0,
    y: 0,
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
