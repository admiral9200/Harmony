/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useCallback } from "react";
import { IElement, IParamsElement } from "../../elements/type";
import useTool from "../tool/hook";
import elementsAtom from "./jotai";

const useElements = () => {
  const [elements, setElements] = useAtom(elementsAtom);

  const { tool, isMoving } = useTool();

  const handleSetElements = useCallback(
    (element: IElement | IParamsElement) => {
      if (element?.id) {
        setElements((prev) => {
          return Object.assign({}, prev, { [`${element?.id}`]: element });
        });
      }
    },
    []
  );

  return {
    elements,
    tool,
    draggable: isMoving,
    handleSetElements: handleSetElements,
  };
};

export default useElements;
