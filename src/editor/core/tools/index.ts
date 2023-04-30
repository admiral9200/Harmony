import { atom } from "jotai";
import { IKeyTool } from "./types";

const keyToolAtom = atom<IKeyTool>("MOVE" as IKeyTool);

export { keyToolAtom };
