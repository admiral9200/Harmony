/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { memo, useMemo } from "react";
import { Layer } from "react-konva";
import { useElement, useTool } from "../hooks";
import useElements from "../hooks/elements/hook";
import { MapEls } from "./mp_el";
import AtomPipeComponent from "./pipe";
import { FCE, IElement } from "./type";

const AtomEditorMapper = memo(() => {
  const { elements, draggable, handleSetElements } = useElements();
  const { element, handleSetElement } = useElement();
  const { isMoving } = useTool();

  const onChange = useMemo(() => {
    return (element: IElement) => {
      handleSetElement(element);
      handleSetElements(element);
    };
  }, [isMoving, element, elements]);

  const mapped = useMemo(() => {
    return Object.values(elements);
  }, [elements]);

  return (
    <>
      <Layer>
        {mapped?.map((item) => {
          const Component = MapEls?.[item?.tool] as FCE;
          return (
            <Component
              {...item}
              key={item?.id}
              draggable={draggable}
              isMoving={isMoving}
              isSelected={item?.id === element?.id}
              onChange={onChange}
              onSelect={onChange}
            />
          );
        })}
      </Layer>
      <AtomPipeComponent />
    </>
  );
});

export default AtomEditorMapper;
