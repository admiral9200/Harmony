import { IPELMT } from "@/editor/core/elements/type";
import { IRelativePosition } from "../../types";

const imageElementProgress = (
  event: IRelativePosition,
  element: IPELMT
): IPELMT => {
  const { x, y } = event;
  const isHeight = x - Number(element?.x) < 0 ? 1 : x - Number(element?.x);
  const isWidth = y - Number(element?.y) < 0 ? 1 : y - Number(element?.y);

  return Object.assign({}, element, {
    width: isHeight,
    height: isWidth,
  });
};
export default imageElementProgress;
