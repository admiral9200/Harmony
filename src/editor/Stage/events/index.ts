import { IElement } from "@/editor/core/elements/type";
import { IKeyTool } from "@/editor/core/tools/types";
import { KonvaEventObject } from "konva/lib/Node";
import boxElementProgress from "./progress/BOX";
import circleElementProgress from "./progress/CIRCLE";
import drawElementProgress from "./progress/DRAW";
import imageElementProgress from "./progress/IMAGE";
import lineElementProgress from "./progress/LINE";
import textElementProgress from "./progress/TEXT";
import boxElementStart from "./start/BOX";
import circleElementStart from "./start/CIRCLE";
import drawElementStart from "./start/DRAW";
import imageElementStart from "./start/IMAGE";
import lineElementStart from "./start/LINE";
import textElementStart from "./start/TEXT";

type IEventElement = {
  [key in IKeyTool]?: {
    start: IElement;
    progress: IElement;
  };
};

type Props = {
  event: KonvaEventObject<MouseEvent>;
  element?: IElement;
  countElements: number;
};

const EventsStageElements = ({
  event,
  element,
  countElements,
}: Props): IEventElement => {
  return {
    BOX: {
      start: boxElementStart(event, countElements),
      progress: boxElementProgress?.(event, element ?? ({} as IElement)),
    },
    DRAW: {
      start: drawElementStart(event),
      progress: drawElementProgress?.(event, element ?? ({} as IElement)),
    },
    CIRCLE: {
      start: circleElementStart(event),
      progress: circleElementProgress?.(event, element ?? ({} as IElement)),
    },
    LINE: {
      start: lineElementStart(event),
      progress: lineElementProgress?.(event, element ?? ({} as IElement)),
    },
    IMAGE: {
      start: imageElementStart(event),
      progress: imageElementProgress(event, element ?? ({} as IElement)),
    },
    TEXT: {
      start: textElementStart(event),
      progress: textElementProgress(event, element ?? ({} as IElement)),
    },
  };
};

export default EventsStageElements;
