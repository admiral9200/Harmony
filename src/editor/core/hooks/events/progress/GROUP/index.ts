import { IPELMT } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

const groupProgress = (
  event: KonvaEventObject<MouseEvent>,
  element: IPELMT
): IPELMT => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);
  const isHeight = x - Number(element?.x) < 0 ? 1 : x - Number(element?.x);
  const isWidth = y - Number(element?.y) < 0 ? 1 : y - Number(element?.y);
  return Object.assign({}, element, {
    width: isHeight,
    height: isWidth,
  });
};

export default groupProgress;
