import { atom } from "jotai";
import { IElement } from "./type";

const ElementsAtom = atom<IElement[]>([]);
