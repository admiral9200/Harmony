import { IPELMT } from "@/editor/core/elements/type";
import { IRelativePosition } from "../../types";

const drawElementProgress = (
  event: IRelativePosition,
  element: IPELMT
): IPELMT => {
  const { x, y } = event;
  return {
    ...(element ?? {}),
    points: [...(element?.points ?? ([] as number[])), x, y],
  };
};

export default drawElementProgress;
