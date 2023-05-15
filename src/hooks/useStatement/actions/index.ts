import { IElement } from "@/editor/core/elements/type";
import { IKeyTool } from "@/editor/core/tools/types";
import { getRandomColor } from "@/utils/randomColor";
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
        // fill: getRandomColor(),
        zIndex: 1,
        tool: "BOX",
        rotate: 0,
        height: 100,
        width: 100,
        style: {
          backgroundColor: getRandomColor(),
        },
      };
    },
    TEXT: () => {
      return {
        id: uuidv4(),
        x,
        y,
        // fill: getRandomColor(),
        zIndex: 1,
        tool: "TEXT",
        rotate: 0,
        text: uuidv4().slice(0, 4),
        style: {
          colorText: getRandomColor(),
        },
        height: 100,
        width: 100,
      };
    },
    CIRCLE: () => {
      return {
        id: uuidv4(),
        x,
        y,
        tool: "CIRCLE",
        zIndex: 1,
        rotate: 0,
        text: uuidv4().slice(0, 4),
        style: {
          backgroundColor: getRandomColor(),
        },
        height: 100,
        width: 100,
      };
    },
    LINE: () => {
      return {
        id: uuidv4(),
        x,
        y,
        tool: "LINE",
        zIndex: 1,
        text: uuidv4().slice(0, 4),
        style: {
          stroke: getRandomColor(),
          strokeWidth: 4,
        },
        rotate: 0,
        points: [0, 0, 100, 0],
        height: 100,
        width: 400,
      };
    },
    IMAGE: () => {
      return {
        id: uuidv4(),
        x,
        y,
        tool: "IMAGE",
        zIndex: 1,
        text: uuidv4().slice(0, 4),
        style: {
          stroke: getRandomColor(),
          strokeWidth: 4,
        },
        src: "https://picsum.photos/200/300",
        rotate: 0,
        points: [0, 0, 100, 0],
        height: 100,
        width: 400,
      };
    },
  };
};

export default Actions;
