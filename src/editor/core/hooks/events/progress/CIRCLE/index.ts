import { IPELMT } from "@/editor/core/elements/type";
import { IRelativePosition } from "../../types";

const circleElementProgress = (
  event: IRelativePosition,
  element: IPELMT
): IPELMT => {
  const { x } = event;
  return Object.assign({}, element, {
    width: isNegative(x - Number(element?.x)),
    height: isNegative(x - Number(element?.x)),
  });
};

const isNegative = (value: number) => {
  return value < 1 ? 1 : value;
};

export default circleElementProgress;
