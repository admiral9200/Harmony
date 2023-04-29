import { atom } from "jotai";
import { IKeyTool } from "./types";

const keyMethodAtom = atom<IKeyTool>("MOVE" as IKeyTool);

export { keyMethodAtom };
