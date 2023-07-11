/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useCallback } from "react";
import { IElement, IParamsElement } from "../../elements/type";
import pipeElement from "./jotai";

const usePipe = () => {
  const [pipeline, setElement] = useAtom(pipeElement);

  const handleChangeElement = useCallback((params: IElement) => {
    setElement((prev) => {
      return Object.assign({}, prev, params);
    });
  }, []);
  const handleSetElement = useCallback((element: IElement | IParamsElement) => {
    setElement(element);
  }, []);
  const handleEmptyElement = useCallback(() => {
    setElement({} as IElement);
  }, []);
  return {
    pipeline,
    handleChangeElement,
    handleEmptyElement,
    handleSetElement,
  };
};

export default usePipe;
