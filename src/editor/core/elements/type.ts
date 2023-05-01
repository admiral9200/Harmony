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
  onChange: (item: IElement) => void;
  isSelected: boolean;
  onSelect: (item: IElement) => void;
};

export type FCE = FC<IFCElement>;
