/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useMemo } from "react";
import { IElement, IParamsElement } from "../../elements/type";
import pipeElement from "./jotai";

const usePipe = () => {
  const [pipeline, setElement] = useAtom(pipeElement);

  const handleChangeElement = useMemo(() => {
    return (params: IElement) => {
      setElement((prev) => {
        return Object.assign({}, prev, params);
      });
    };
  }, []);
  const handleSetElement = useMemo(() => {
    return (element: IElement | IParamsElement) => {
      setElement(element);
    };
  }, []);
  const handleEmptyElement = useMemo(() => {
    return () => {
      setElement({} as IElement);
    };
  }, []);
  return {
    pipeline,
    handleChangeElement,
    handleEmptyElement,
    handleSetElement,
  };
};

export default usePipe;
