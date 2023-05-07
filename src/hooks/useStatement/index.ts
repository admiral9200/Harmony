import { ElementsAtom } from "@/editor/core/elements/jotai";
import { useAtom } from "jotai";
import useTool from "../useTool";

const useElements = () => {
  const [elements, setElements] = useAtom(ElementsAtom);
  const { tool, isMoving } = useTool();
  console.log({ elements });

  return {
    elements,
    tool,
    draggable: isMoving,
    setElements,
  };
};

export default useElements;
