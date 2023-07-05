import { atomWithStorage } from "jotai/utils";
import { IElement, IParamsElement } from "../../elements/type";

type IOBCElement = {
  [key: string]: IElement | IParamsElement;
};

const elementsAtom = atomWithStorage<IOBCElement>("harmony_elements", {});
export default elementsAtom;
