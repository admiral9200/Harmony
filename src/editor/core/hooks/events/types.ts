import { KonvaEventObject } from "konva/lib/Node";
import { IElement, IPELMT, IParamsElement } from "../../elements/type";
import { IKeyTool } from "../tool/types";

export type IStartEvent = (
  event: KonvaEventObject<MouseEvent>,
  count: number,
  pageId: string
) => IElement | IParamsElement;

export type IEndEvent = (
  event: KonvaEventObject<MouseEvent>,
  element: IPELMT
) => IPELMT;

export type IEventElement = {
  [key in IKeyTool]?: {
    start: IStartEvent;
    progress: IEndEvent;
  };
};

export type IStageEvents = "STAGE_COPY_ELEMENT" | "STAGE_WATCHING";
