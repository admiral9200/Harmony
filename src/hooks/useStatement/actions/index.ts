import { IElement } from "@/editor/core/elements/type";
import { IKeyTool } from "@/editor/core/tools/types";
import { KonvaEventObject } from "konva/lib/Node";
import { Stage } from "konva/lib/Stage";
import { v4 as uuidv4 } from "uuid";
import getRelativePointerPosition from "./position";

type IActions = {
  [key in IKeyTool]?: () => IElement;
};

const Actions = (event: KonvaEventObject<MouseEvent>): IActions => {
  const stage = event?.target?.getStage?.() as Stage;
  const { x, y } = getRelativePointerPosition(stage);

  return {
    BOX: () => {
      return {
        id: uuidv4(),
        x,
        y,
        tool: "BOX",
        height: 100,
        width: 100,
      };
    },
  };
};

export default Actions;
