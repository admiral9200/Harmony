/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom, useSetAtom } from "jotai";
import { useCallback } from "react";
import { IElement, IParamsElement } from "../../elements/type";
import selectChangeAtom from "../select/jotai";
import elementSelectedAtom from "./jotai";

const useElement = () => {
  const [element, setElement] = useAtom(elementSelectedAtom);

  const setterChangeElement = useSetAtom(selectChangeAtom);

  const handleChangeElement = useCallback(
    (params: IElement | IParamsElement) => {
      setElement((prev) => {
        return Object.assign({}, prev, params);
      });
    },
    []
  );

  const handleSelectedChangeElement = useCallback(
    (params: IElement | IParamsElement) => {
      setterChangeElement((prev) => {
        return Object.assign({}, prev, params);
      });
    },
    []
  );

  const handleSetElement = useCallback((element: IElement | IParamsElement) => {
    setElement(element);
    setterChangeElement(element);
  }, []);

  const handleEmptyElement = useCallback(() => {
    setElement({} as IElement | IParamsElement);
  }, []);
  return {
    element,
    handleSelectedChangeElement,
    handleChangeElement,
    handleEmptyElement,
    handleSetElement,
  };
};

export default useElement;
