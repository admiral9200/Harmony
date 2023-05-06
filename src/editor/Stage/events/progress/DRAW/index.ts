import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

const drawElementProgress = (
  event: KonvaEventObject<MouseEvent>,
  element: IElement
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  return {
    ...(element ?? {}),
    points: [...(element?.points ?? ([] as number[])), x, y],
  };
};

export default drawElementProgress;
