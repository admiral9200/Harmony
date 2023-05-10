import {
  ElementSelected,
  setElementDeleteAtom,
  setElsUpAtom,
} from "@/editor/core/elements/jotai";
import { IElement } from "@/editor/core/elements/type";
import { useAtom, useSetAtom } from "jotai";

const useElement = () => {
  const [element, setElement] = useAtom(ElementSelected);

  const setReUpdate = useSetAtom(setElsUpAtom);

  const deleteElement = useSetAtom(setElementDeleteAtom);

  return {
    element,
    setElement,
    upElement: setReUpdate,
    allUpdate: (element: IElement) => {
      setReUpdate(element);
      setElement(element);
    },
    deleteElement,
  };
};
export default useElement;
