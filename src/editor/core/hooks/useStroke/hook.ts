import { useAtomValue } from "jotai";
import strokeAtom from "./jotai";

const useStroke = () => {
  const stroke = useAtomValue(strokeAtom);

  return stroke;
};

export default useStroke;
