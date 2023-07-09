import { useAtom } from "jotai";
import Konva from "konva";
import { useRef } from "react";
import selectionAtom, { isSelectElementsAtom } from "./jotai";

const useSelection = () => {
  const selectionRectRef = useRef<Konva.Rect>();
  const trRef = useRef<Konva.Transformer>();

  const layerRef = useRef<Konva.Layer>();

  const selectionRef = useRef({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  const [selectionRefsState, setSelectionRefs] = useAtom(selectionAtom);
  const [isSelected, setSelected] = useAtom(isSelectElementsAtom);

  return {
    selectionRefsState,
    selectionRectRef,
    trRef,
    layerRef,
    setSelectionRefs,
    selectionRef,
    isSelected,
    setSelected,
  };
};

export default useSelection;
