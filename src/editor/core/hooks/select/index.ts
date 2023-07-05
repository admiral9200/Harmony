/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useMemo } from "react";
import { IParamsElement } from "../../elements/type";
import { selectChangeAtom } from "./jotai";

const useSelect = () => {
  const [SelectedChangeElement, setterChangeElement] =
    useAtom(selectChangeAtom);

  const handleSelectedChangeElement = useMemo(() => {
    return (params: IParamsElement) => {
      setterChangeElement((prev) => {
        return Object.assign({}, prev, params);
      });
    };
  }, []);

  const handleEmptyElement = useMemo(() => {
    return () => {
      setterChangeElement({} as IParamsElement);
    };
  }, []);
  return {
    SelectedChangeElement,
    handleSelectedChangeElement,
    handleEmptyElement,
  };
};

export default useSelect;
