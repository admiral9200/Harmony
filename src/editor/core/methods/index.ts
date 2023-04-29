import { atom } from "jotai";
import { IKeyMethod } from "./types";

const keyMethodAtom = atom<IKeyMethod>("MOVE" as IKeyMethod);

export { keyMethodAtom };
