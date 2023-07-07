import { IPELMT } from "@/editor/core/elements/type";
import stagePosition from "@/editor/core/helpers/stage/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";

const circleElementProgress = (
  event: KonvaEventObject<MouseEvent>,
  element: IPELMT
): IPELMT => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x } = stagePosition(stage);

  return Object.assign({}, element, {
    width: isNegative(x - Number(element?.x)),
    height: isNegative(x - Number(element?.x)),
  });
};

const isNegative = (value: number) => {
  return value < 1 ? 1 : value;
};

export default circleElementProgress;
