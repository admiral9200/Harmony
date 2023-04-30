import { ElementsAtom } from "@/editor/core/elements/jotai";
import { IElement } from "@/editor/core/elements/type";
import { keyToolAtom } from "@/editor/core/tools";
import { useAtom, useAtomValue } from "jotai";
import { KonvaEventObject } from "konva/lib/Node";
import Actions from "./actions";

const useEditorStatement = () => {
  const [elements, setElements] = useAtom(ElementsAtom);
  const tool = useAtomValue(keyToolAtom);

  const handleStageClick = (event: KonvaEventObject<MouseEvent>) => {
    const newElement = Actions?.(event)?.[tool]?.() as IElement;
    setElements((prev) => [...prev, newElement]);
  };

  return {
    elements,
    tool,
    draggable: tool === "MOVE",
    setElements,
    handleStageClick,
  };
};

export default useEditorStatement;
