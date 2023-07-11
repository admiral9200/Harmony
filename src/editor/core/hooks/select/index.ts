/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useCallback } from "react";
import { IParamsElement } from "../../elements/type";
import { selectChangeAtom } from "./jotai";

const useSelect = () => {
  const [SelectedChangeElement, setterChangeElement] =
    useAtom(selectChangeAtom);

  const handleSelectedChangeElement = useCallback((params: IParamsElement) => {
    setterChangeElement((prev) => {
      return Object.assign({}, prev, params);
    });
  }, []);

  const handleEmptyElement = useCallback(() => {
    setterChangeElement({} as IParamsElement);
  }, []);
  return {
    SelectedChangeElement,
    handleSelectedChangeElement,
    handleEmptyElement,
  };
};

export default useSelect;
