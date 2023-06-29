import { KonvaEventObject } from "konva/lib/Node";
import { IElement } from "../../elements/type";
import { IKeyTool } from "../tool/types";

export type IStartEvent = (
  event: KonvaEventObject<MouseEvent>,
  count: number
) => IElement;

export type IEndEvent = (
  event: KonvaEventObject<MouseEvent>,
  element: IElement
) => IElement;

export type IEventElement = {
  [key in IKeyTool]?: {
    start: IStartEvent;
    progress: IEndEvent;
  };
};

export type IStageEvents = "STAGE_COPY_ELEMENT" | "STAGE_WATCHING";
