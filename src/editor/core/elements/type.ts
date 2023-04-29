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
