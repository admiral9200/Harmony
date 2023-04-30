import { Stage } from "konva/lib/Stage";
import { Vector2d } from "konva/lib/types";

const getRelativePointerPosition = (node: Stage) => {
  // the function will return pointer position relative to the passed node
  const transform = node?.getAbsoluteTransform()?.copy?.();
  // to detect relative position we need to invert transform
  transform.invert();

  // get pointer (say mouse or touch) position
  const pos = node?.getStage()?.getPointerPosition?.() as Vector2d;

  // now we find a relative point
  return transform.point(pos);
};
export default getRelativePointerPosition;
