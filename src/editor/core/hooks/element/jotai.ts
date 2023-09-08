import { atom } from "jotai";
import { IElement, IParamsElement } from "../../elements/type";

const elementSelectedAtom = atom<IElement | IParamsElement>({});

export default elementSelectedAtom;
