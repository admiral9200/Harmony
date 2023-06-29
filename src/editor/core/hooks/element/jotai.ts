import { atom } from "jotai";
import { IElement } from "../../elements/type";

const elementSelectedAtom = atom<IElement>({} as IElement);
export default elementSelectedAtom;
