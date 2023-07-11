/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useCallback } from "react";
import { IElement, IParamsElement } from "../../elements/type";
import useElement from "../element/hook";
import useTool from "../tool/hook";
import elementsAtom from "./jotai";

const useElements = () => {
  const [elements, setElements] = useAtom(elementsAtom);
  const { element } = useElement();
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

  const handleDeleteElement = useCallback((id: string) => {
    setElements((prev) => {
      delete prev[id];
      const data = Object.assign({}, prev);
      return data;
    });
  }, []);
  const handleDeleteManyElements = useCallback((ids: string[]) => {
    setElements((prev) => {
      for (const iterator of ids) {
        delete prev[iterator];
      }
      const data = Object.assign({}, prev);
      return data;
    });
  }, []);

  return {
    elements,
    tool,
    draggable: isMoving,
    handleSetElements: handleSetElements,
    handleDeleteElement,
    handleDeleteManyElements,
  };
};

export default useElements;
