import { ElementsAtom } from "@/editor/core/elements/jotai";
import { useAtom } from "jotai";
import { KonvaEventObject } from "konva/lib/Node";
import useTool from "../useTool";

const useElements = () => {
  const [elements, setElements] = useAtom(ElementsAtom);
  const { tool, isAddingElements, isMoving, setTool } = useTool();

  const handleStageClick = (event: KonvaEventObject<MouseEvent>) => {
    if (isAddingElements) {
      // const newElement = Actions?.(event)?.[tool]?.() as IElement;
      // setElements((prev) => [...prev, newElement]);
      // setTool("MOVE");
    }
  };

  return {
    elements,
    tool,
    draggable: isMoving,
    setElements,
    handleStageClick,
  };
};

export default useElements;
