import useElement from "@/hooks/useElement";
import useElements from "@/hooks/useStatement";
import { Layer } from "react-konva";
import { mapperElements } from "./MapElements";
import { FCE } from "./type";

const AtomEditorMapper = () => {
  const { elements, draggable } = useElements();

  const { element, setElement, upElement } = useElement();
  console.log({ elements });

  return (
    <Layer>
      {elements?.map((item) => {
        const Component = mapperElements?.()?.[item.tool] as FCE;
        return (
          <Component
            {...item}
            key={item.id}
            draggable={draggable}
            isSelected={item?.id === element?.id}
            onChange={(data) => {
              upElement(data);
            }}
            onSelect={(data) => {
              setElement(data);
              upElement(data);
            }}
          />
        );
      })}
    </Layer>
  );
};

export default AtomEditorMapper;
