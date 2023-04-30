import useEditorStatement from "@/hooks/useStatement";
import { Layer } from "react-konva";
import { mapperElements } from "./MapElements";
import { FCE } from "./type";

const AtomEditorMapper = () => {
  const { elements, draggable } = useEditorStatement();
  return (
    <Layer>
      {elements?.map((item) => {
        const Component = mapperElements?.()?.[item.tool] as FCE;
        return <Component key={item.id} {...item} draggable={draggable} />;
      })}
    </Layer>
  );
};

export default AtomEditorMapper;
