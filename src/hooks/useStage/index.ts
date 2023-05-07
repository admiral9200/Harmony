import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const StageConfigAtom = atomWithStorage("harmony_stage_config", {
  backgroundColor: "#000000",
  Graphicmapdesign: true,
});
const useStageConfig = () => {
  const [config, setConfig] = useAtom(StageConfigAtom);
  return {
    config,
    setConfig,
  };
};

export default useStageConfig;
