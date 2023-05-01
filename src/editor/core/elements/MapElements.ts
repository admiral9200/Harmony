import { IKeyTool } from "../tools/types";
import AtomEditorElementBox from "./BOX";
import AtomElementText from "./TEXT";
import { IFCElement } from "./type";

export type IMapperElements = {
  [key in IKeyTool]?: (props: IFCElement) => JSX.Element;
};

const mapperElements = (): IMapperElements => {
  return {
    BOX: AtomEditorElementBox,
    TEXT: AtomElementText,
  };
};

export { mapperElements };
