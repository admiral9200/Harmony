import { atom } from "jotai";
import Konva from "konva";
import { MutableRefObject } from "react";

type ISelectionRefs = {
  rectRef: MutableRefObject<any>;
  trRef: MutableRefObject<any>;
  selection: MutableRefObject<any>;
  layerRef: MutableRefObject<Konva.Layer | undefined>;
};

const selectionAtom = atom({} as ISelectionRefs);

export const isSelectElementsAtom = atom(false);

export default selectionAtom;
