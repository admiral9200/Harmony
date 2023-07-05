import { atom } from "jotai";
import { IElement, IParamsElement } from "../../elements/type";
export const selectChangeAtom = atom<IElement | IParamsElement>(
  {} as IParamsElement
);
export default selectChangeAtom;
