import { IKeyTool } from "../tools/types";
import AtomEditorElementBox from "./BOX";
import AtomElementCircle from "./CIRCLE";
import AtomElementLine from "./LINE";
import AtomElementText from "./TEXT";
import { IFCElement } from "./type";

export type IMapperElements = {
  [key in IKeyTool]?: (props: IFCElement) => JSX.Element;
};

const mapperElements = (): IMapperElements => {
  return {
    BOX: AtomEditorElementBox,
    TEXT: AtomElementText,
    CIRCLE: AtomElementCircle,
    LINE: AtomElementLine,
  };
};

export { mapperElements };
