import { IElement } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

const textElementProgress = (
  event: KonvaEventObject<MouseEvent>,
  element: IElement
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);

  return {
    ...(element ?? {}),
    width: x - element?.x,
    height: y - element?.y,
  };
};

export default textElementProgress;
