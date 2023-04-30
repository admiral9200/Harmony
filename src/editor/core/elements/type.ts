import { FC } from "react";
import { IKeyTool } from "../tools/types";

export type IElement = {
  id: string;
  tool: IKeyTool;
  x: number;
  y: number;
  width?: number;
  height?: number;
  fill?: string;
  points?: number[];
};

export type IFCElement = IElement & {
  draggable: boolean;
};

export type FCE = FC<IFCElement>;
