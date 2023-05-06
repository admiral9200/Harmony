import { IElement } from "@/editor/core/elements/type";
import { IKeyTool } from "@/editor/core/tools/types";
import { KonvaEventObject } from "konva/lib/Node";
import boxElementProgress from "./progress/BOX";
import drawElementProgress from "./progress/DRAW";
import boxElementStart from "./start/BOX";
import drawElementStart from "./start/DRAW";

type IEventElement = {
  [key in IKeyTool]?: {
    start: IElement;
    progress: IElement;
  };
};

const EventsStageElements = (
  event: KonvaEventObject<MouseEvent>,
  element?: IElement
): IEventElement => {
  return {
    BOX: {
      start: boxElementStart(event),
      progress: boxElementProgress?.(event, element ?? ({} as IElement)),
    },
    DRAW: {
      start: drawElementStart(event),
      progress: drawElementProgress?.(event, element ?? ({} as IElement)),
    },
  };
};

export default EventsStageElements;
