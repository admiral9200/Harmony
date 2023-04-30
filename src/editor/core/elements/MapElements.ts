import { IKeyTool } from "../tools/types";
import AtomEditorElementBox from "./BOX";
import { IFCElement } from "./type";

export type IMapperElements = {
  [key in IKeyTool]?: (props: IFCElement) => JSX.Element;
};

const mapperElements = (): IMapperElements => {
  return {
    BOX: AtomEditorElementBox,
  };
};

export { mapperElements };
