import { atom } from "jotai";
import { IElement, IPELMT, IParamsElement } from "../../elements/type";
import elementSelectedAtom from "../element/jotai";
import { pageSelectedAtom } from "../pages/jotai";

type IOBCElement = {
  [key: string]: IElement | IParamsElement;
};

const elementsAtom = atom<IOBCElement>({});

export const dragStateAtom = atom({
  start: {} as IPELMT,
  enter: {} as IPELMT,
});

export const ReOrderElementsAtom = atom(null, (get, set) => {
  const drag = get(dragStateAtom);
  const elements = get(elementsAtom);

  if (drag.start?.view_position && drag.enter?.view_position) {
    const updateStartElement = Object.assign({}, drag.start, {
      view_position: Number(drag.enter?.view_position),
    });
    const updateEnterElement = Object.assign({}, drag.enter, {
      view_position: Number(drag.start?.view_position),
    });

    const updateElements = Object.assign({}, elements, {
      [`${updateStartElement?.id}`]: updateStartElement,
      [`${updateEnterElement?.id}`]: updateEnterElement,
    });

    set(elementsAtom, updateElements);
    set(elementSelectedAtom, updateStartElement);
    set(dragStateAtom, {
      start: {} as IPELMT,
      enter: {} as IPELMT,
    });
  }
});

export const LayerOrderElements = atom(
  (get) => {
    const elements = get(elementsAtom);
    return Object.values(elements)
      ?.sort((a, b) => Number(a?.view_position) - Number(b?.view_position))
      ?.filter((item) => get(pageSelectedAtom)?.includes(`${item?.pageId}`));
  },
  (get, set, args: IOBCElement) => args
);

export default elementsAtom;
