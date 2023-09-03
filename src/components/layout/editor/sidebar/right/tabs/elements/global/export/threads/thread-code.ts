import { IElement, IStyleElement } from "@/editor/core/elements/type";
import Konva from "konva";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ThreadCode = (element: IElement | Partial<IElement>) => {
  const { stroke, strokeWidth } = element?.style as IStyleElement;

  const GroupCode = new Konva.Group({
    x: element?.x,
    y: element?.y,
    id: element?.id,
    width: element?.width,
    height: element?.height,
  });
  GroupCode.add(
    new Konva.Rect({
      x: 0,
      y: 0,
      width: element?.width,
      height: element?.height,
      fill: element?.style?.backgroundColor,
      cornerRadius: [
        Number(element?.style?.borderRadiusTopLeft),
        Number(element?.style?.borderRadiusTopRight),
        Number(element?.style?.borderRadiusBottomLeft),
        Number(element?.style?.borderRadiusBottomRight),
      ],
    })
  );
  GroupCode.add(
    new Konva.Rect({
      x: 0,
      y: 0,
      fill: "#333e44",
      cornerRadius: [
        Number(element?.style?.borderRadiusTopLeft),
        Number(element?.style?.borderRadiusTopRight),
        0,
        0,
      ],
      width: Number(element?.width),
      height: 40,
    })
  );
  GroupCode.add(
    new Konva.Rect({
      x: 17,
      y: 17,
      fill: "#ff5f57",
      width: 13,
      height: 13,
      cornerRadius: 10,
    })
  );
  GroupCode.add(
    new Konva.Rect({
      x: 37,
      y: 17,
      fill: "#febc2e",
      width: 13,
      height: 13,
      cornerRadius: 10,
    })
  );
  GroupCode.add(
    new Konva.Rect({
      x: 57,
      y: 17,
      fill: "#28c840",
      width: 13,
      height: 13,
      cornerRadius: 10,
    })
  );

  return GroupCode;
};

export default ThreadCode;
