"use client";
import useElement from "@/hooks/useElement";
import useElements from "@/hooks/useStatement";
import useTool from "@/hooks/useTool";
import { Layer, Rect } from "react-konva";
import { mapperElements } from "./MapElements";
import { FCE } from "./type";

const AtomEditorMapper = () => {
  const { elements, draggable } = useElements();
  const { element, upElement, allUpdate } = useElement();
  const { isMoving } = useTool();

  return (
    <Layer
      width={1057}
      height={1496}
      visible={true}
      // draggable
    >
      <Rect width={1057} height={1496} x={0} y={0} fill="white" dashEnabled />
      {elements?.map((item) => {
        const Component = mapperElements?.()?.[item?.tool] as FCE;
        return (
          <Component
            {...item}
            key={item?.id}
            draggable={draggable}
            isMoving={isMoving}
            isSelected={item?.id === element?.id}
            onChange={(data) => {
              upElement(data);
            }}
            onSelect={(data) => {
              allUpdate(data);
            }}
          />
        );
      })}
    </Layer>
  );
};

export default AtomEditorMapper;
