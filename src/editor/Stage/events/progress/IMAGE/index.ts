import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

const imageElementProgress = (
  event: KonvaEventObject<MouseEvent>,
  element: IElement
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  const isHeight = x - element?.x < 0 ? 1 : x - element?.x;
  const isWidth = y - element?.y < 0 ? 1 : y - element?.y;
  return {
    ...(element ?? {}),
    width: isHeight,
    height: isWidth,
  };
};
export default imageElementProgress;
