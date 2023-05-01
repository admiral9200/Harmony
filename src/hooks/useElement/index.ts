import { ElementSelected, setElsUpAtom } from "@/editor/core/elements/jotai";
import { useAtom, useSetAtom } from "jotai";

const useElement = () => {
  const [element, setElement] = useAtom(ElementSelected);

  const setReUpdate = useSetAtom(setElsUpAtom);
  return {
    element,
    setElement,
    upElement: setReUpdate,
  };
};
export default useElement;
