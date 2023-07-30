import { IPELMT } from "@/editor/core/elements/type";
import { IRelativePosition } from "../../types";

const textElementProgress = (
  event: IRelativePosition,
  element: IPELMT
): IPELMT => {
  const { x, y } = event;

  return Object.assign({}, element, {
    width: x - Number(element?.x),
    height: y - Number(element?.y),
  });
};

export default textElementProgress;
