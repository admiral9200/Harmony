import { IElement, IPELMT, IParamsElement } from "../../elements/type";
import { IKeyTool } from "../tool/types";

export type IRelativePosition = {
  x: number;
  y: number;
};

export type IStartEvent = (
  event: IRelativePosition,
  count: number,
  pageId: string,
  groupId: string,
  params?: {
    text?: string;
    image?: string;
    width?: number;
    height?: number;
  }
) => IElement | IParamsElement;

export type IEndEvent = (event: IRelativePosition, element: IPELMT) => IPELMT;

export type IEventElement = {
  [key in IKeyTool]?: {
    start: IStartEvent;
    progress: IEndEvent;
  };
};

export type IStageEvents = "STAGE_COPY_ELEMENT" | "STAGE_WATCHING";
