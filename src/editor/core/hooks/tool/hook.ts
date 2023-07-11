import { useAtom } from "jotai";
import { useMemo } from "react";
import toolEditorAtom from "./jotai";
import { IKeyTool } from "./types";

const keyMove: IKeyTool[] = ["BOX", "CIRCLE", "LINE", "IMAGE", "TEXT"];

const useTool = () => {
  const [tool, setTool] = useAtom(toolEditorAtom);

  const isMoving = useMemo(() => tool === "MOVE", [tool]);

  const isCreatingElement = useMemo(
    () => tool !== "MOVE" && tool !== "WRITING",
    [tool]
  );

  const disableKeyBoard = useMemo(() => tool !== "WRITING", [tool]);
  const isDrawing = useMemo(() => tool === "DRAW", [tool]);
  const isAddingElements = useMemo(() => keyMove?.includes(tool), [tool]);

  return {
    tool,
    setTool,
    isMoving,
    isCreatingElement,
    disableKeyBoard,
    isDrawing,
    isAddingElements,
  };
};

export default useTool;
