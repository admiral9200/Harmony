/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useMemo } from "react";
import { IElement } from "../../elements/type";
import elementSelectedAtom from "./jotai";

const useElement = () => {
  const [element, setElement] = useAtom(elementSelectedAtom);

  const handleChangeElement = useMemo(() => {
    return (params?: IElement) => {
      setElement((prev) => {
        return {
          ...prev,
          ...params,
        };
      });
    };
  }, []);
  const handleSetElement = useMemo(() => {
    return (element: IElement) => {
      setElement(element);
    };
  }, []);
  const handleEmptyElement = useMemo(() => {
    return () => {
      setElement({} as IElement);
    };
  }, []);
  return {
    element,
    handleChangeElement,
    handleEmptyElement,
    handleSetElement,
  };
};

export default useElement;
