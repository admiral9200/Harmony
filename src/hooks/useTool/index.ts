import { keyToolAtom } from "@/editor/core/tools";
import { useAtom } from "jotai";

const keyMove = ["MOVE", "DRAW"];

const useTool = () => {
  const [tool, setTool] = useAtom(keyToolAtom);
  return {
    tool,
    setTool,
    isMove: !keyMove?.includes(tool),
  };
};

export default useTool;
