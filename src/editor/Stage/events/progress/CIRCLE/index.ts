import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

const circleElementProgress = (
  event: KonvaEventObject<MouseEvent>,
  element: IElement
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);

  return {
    ...(element ?? {}),
    width: isNegative(x - element?.x),
    height: isNegative(x - element?.x),
  };
};

const isNegative = (value: number) => {
  return value < 1 ? 1 : value;
};

export default circleElementProgress;
