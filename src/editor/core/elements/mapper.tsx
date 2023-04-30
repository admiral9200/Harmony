import useEditorStatement from "@/hooks/useStatement";
import { IKeyTool } from "../tools/types";
import AtomEditorElementBox from "./BOX";
import { FCE, IFCElement } from "./type";

type IMapperElements = {
  [key in IKeyTool]?: (props: IFCElement) => JSX.Element;
};

const mapperElements = (): IMapperElements => {
  return {
    BOX: AtomEditorElementBox,
  };
};

const AtomEditorMapper = () => {
  const { elements, draggable } = useEditorStatement();

  return elements?.map((item) => {
    const Component = mapperElements?.()?.[item.tool] as FCE;
    return <Component key={item.id} {...item} draggable={draggable} />;
  });
};

export default AtomEditorMapper;
