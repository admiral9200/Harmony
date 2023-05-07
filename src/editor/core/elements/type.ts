import { FC } from "react";
import { IKeyTool } from "../tools/types";

export type IElement = {
  id: string;
  tool: IKeyTool;
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  points?: number[];
  src?: string;
  rotate?: number;
  style?: {
    backgroundColor?: string;
    colorText?: string;
    stroke?: string;
    strokeWidth?: number;
  };
};

export type IFCElement = IElement & {
  draggable: boolean;
  onChange: (item: IElement) => void;
  isSelected: boolean;
  onSelect: (item: IElement) => void;
  isMoving: boolean;
};

export type FCE = FC<IFCElement>;
