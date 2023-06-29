import { atom } from "jotai";
import { IKeyTool } from "./types";

const toolEditorAtom = atom<IKeyTool>("MOVE" as IKeyTool);

export default toolEditorAtom;
