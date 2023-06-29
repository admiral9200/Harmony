import { atomWithStorage } from "jotai/utils";
import { IElement } from "../../elements/type";

type IOBCElement = {
  [key: string]: IElement;
};

const elementsAtom = atomWithStorage<IOBCElement>("harmony_elements", {});
export default elementsAtom;
