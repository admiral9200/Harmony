import { useAtom } from "jotai";
import StageConfigAtom from "./jotai";
import { IStageConfig } from "./types";

const useStage = () => {
  const [config, setConfig] = useAtom(StageConfigAtom);

  const handleConfig = (params: IStageConfig) => {
    setConfig((prev) => {
      return Object.assign({}, prev, params);
    });
  };

  return {
    config,
    handleConfig,
  };
};

export default useStage;
