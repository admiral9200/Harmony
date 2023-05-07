import { ElementSelected, setElsUpAtom } from "@/editor/core/elements/jotai";
import { IElement } from "@/editor/core/elements/type";
import { useAtom, useSetAtom } from "jotai";

const useElement = () => {
  const [element, setElement] = useAtom(ElementSelected);

  const setReUpdate = useSetAtom(setElsUpAtom);

  return {
    element,
    setElement,
    upElement: setReUpdate,
    allUpdate: (element: IElement) => {
      setReUpdate(element);
      setElement(element);
    },
  };
};
export default useElement;
