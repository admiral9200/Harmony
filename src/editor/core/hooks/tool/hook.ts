import { useAtom } from "jotai";
import toolEditorAtom from "./jotai";
import { IKeyTool } from "./types";

const keyMove: IKeyTool[] = ["BOX", "CIRCLE", "LINE", "IMAGE", "TEXT"];

const useTool = () => {
  const [tool, setTool] = useAtom(toolEditorAtom);
  return {
    tool,
    setTool,
    isMoving: tool === "MOVE",
    isCreatingElement: tool !== "MOVE" && tool !== "WRITING",
    disableKeyBoard: tool !== "WRITING",
    isDrawing: tool === "DRAW",
    isAddingElements: keyMove?.includes(tool),
  };
};

export default useTool;
