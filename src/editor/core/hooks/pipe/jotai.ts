import { atom } from "jotai";
import { IElement, IParamsElement } from "../../elements/type";

const pipeElement = atom<IElement | IParamsElement>({} as IElement);

export default pipeElement;
