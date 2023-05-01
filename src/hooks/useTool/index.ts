import { keyToolAtom } from "@/editor/core/tools";
import { IKeyTool } from "@/editor/core/tools/types";
import { useAtom } from "jotai";

const keyMove: IKeyTool = "MOVE";

const useTool = () => {
  const [tool, setTool] = useAtom(keyToolAtom);
  return {
    tool,
    setTool,
    isMove: tool !== keyMove,
  };
};

export default useTool;
