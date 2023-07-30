import { IPELMT } from "@/editor/core/elements/type";
import { IRelativePosition } from "../../types";

const lineElementProgress = (
  event: IRelativePosition,
  element: IPELMT
): IPELMT => {
  const { x, y } = event;

  return Object.assign({}, element, {
    width: x - Number(element?.x),
    height: y - Number(element?.y),
  });
};
export default lineElementProgress;
