import { IPELMT } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

const lineElementProgress = (
  event: KonvaEventObject<MouseEvent>,
  element: IPELMT
): IPELMT => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = stagePosition(stage);

  return Object.assign({}, element, {
    width: x - Number(element?.x),
    height: y - Number(element?.y),
  });
};
export default lineElementProgress;
