import { atomWithStorage } from "jotai/utils";
import { IStageConfig } from "./types";

const StageConfigAtom = atomWithStorage<IStageConfig>("harmony_stage", {
  backgroundColor: "#000000",
  graphicMapped: true,
});
export default StageConfigAtom;
