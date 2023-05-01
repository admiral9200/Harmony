import { ElementsAtom } from "@/editor/core/elements/jotai";
import { IElement } from "@/editor/core/elements/type";
import { useAtom } from "jotai";
import { KonvaEventObject } from "konva/lib/Node";
import useTool from "../useTool";
import Actions from "./actions";

const useElements = () => {
  const [elements, setElements] = useAtom(ElementsAtom);
  const { tool, isMove } = useTool();

  const handleStageClick = (event: KonvaEventObject<MouseEvent>) => {
    if (isMove) {
      const newElement = Actions?.(event)?.[tool]?.() as IElement;
      setElements((prev) => [...prev, newElement]);
    }
  };

  return {
    elements,
    tool,
    draggable: tool === "MOVE",
    setElements,
    handleStageClick,
  };
};

export default useElements;