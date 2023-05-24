import { keyToolAtom } from "@/editor/core/tools";
import { IKeyTool } from "@/editor/core/tools/types";
import { useAtom } from "jotai";

const keyMove: IKeyTool[] = ["BOX", "CIRCLE", "LINE", "IMAGE", "TEXT"];

const useTool = () => {
  const [tool, setTool] = useAtom(keyToolAtom);
  return {
    tool,
    setTool,
    isMoving: tool === "MOVE" || tool === "WRITING",
    isDrawing: tool === "DRAW",
    isAddingElements: keyMove?.includes(tool),
  };
};

export default useTool;
