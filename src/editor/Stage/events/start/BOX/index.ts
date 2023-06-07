import { IElement } from "@/editor/core/elements/type";
import getRelativePointerPosition from "@/hooks/useStatement/actions/position";
import Konva from "konva";
import { KonvaEventObject } from "konva/lib/Node";
import { v4 as uuidv4 } from "uuid";

const boxElementStart = (
  event: KonvaEventObject<MouseEvent>,
  count: number
): IElement => {
  const stage = event?.target?.getStage?.() as Konva.Stage;
  const { x, y } = getRelativePointerPosition(stage);
  return {
    id: uuidv4(),
    x,
    y,
    tool: "BOX",
    rotate: 0,
    height: 1,
    width: 1,
    zIndex: count + 1,
    style: {
      backgroundColor: "#ffffff",
      isAllBorderRadius: false,
      borderRadius: 0,
      borderRadiusBottomLeft: 0,
      borderRadiusBottomRight: 0,
      borderRadiusTopLeft: 0,
      borderRadiusTopRight: 0,
    },
  };
};
export default boxElementStart;
