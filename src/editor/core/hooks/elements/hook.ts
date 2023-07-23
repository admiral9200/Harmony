/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom, useSetAtom } from "jotai";
import { useCallback } from "react";
import { IElement, IParamsElement } from "../../elements/type";
import useTool from "../tool/hook";
import elementsAtom, { ReOrderElementsAtom, dragStateAtom } from "./jotai";

const useElements = () => {
  const [elements, setElements] = useAtom(elementsAtom);
  const { tool, isMoving } = useTool();

  const [dragState, dragSetState] = useAtom(dragStateAtom);
  const setOrderElements = useSetAtom(ReOrderElementsAtom);

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

  const handleOrderElements = useCallback(() => {
    setOrderElements();
  }, []);

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

  const handleDeleteElementsByPage = useCallback((pageId: string) => {
    setElements((prev) => {
      for (const iterator of Object.values(prev)) {
        if (pageId === iterator.pageId) {
          delete prev[`${iterator.id}`];
        }
      }
      const data = Object.assign({}, prev);
      return data;
    });
  }, []);

  return {
    elements,
    dragState,
    dragSetState,
    handleOrderElements,
    tool,
    handleDeleteElementsByPage,
    draggable: isMoving,
    handleSetElements: handleSetElements,
    handleDeleteElement,
    handleDeleteManyElements,
  };
};

export default useElements;
