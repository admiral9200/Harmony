import { FC } from "react";
import { IKeyTool } from "../hooks/tool/types";

export type IElement = {
  id: string;
  tool: IKeyTool;
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  visible: boolean;
  resolution?: "portrait" | "landscape";
  points?: number[];
  src?: string;
  rotate?: number;
  zIndex: number;
  style?: {
    backgroundColor?: string;
    fontSize?: number;
    fontStyle?: string;
    textDecoration?: string;
    shadowBlur?: number;
    borderRadius?: number;
    isAllBorderRadius?: boolean;
    borderRadiusTopLeft?: number;
    zIndex?: number;
    borderRadiusTopRight?: number;
    borderRadiusBottomRight?: number;
    borderRadiusBottomLeft?: number;
    colorText?: string;
    stroke?: string;
    strokeWidth?: number;
  };
};

export type IParamsElement = Partial<IElement>;

export type IFCElement = IParamsElement & {
  draggable: boolean;
  onChange: (item: IElement) => void;
  isSelected: boolean;
  onSelect: (item: IElement) => void;
  isMoving: boolean;
};

export type FCE = FC<IFCElement>;
