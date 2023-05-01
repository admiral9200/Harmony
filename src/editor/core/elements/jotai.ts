import { atom } from "jotai";
import { IElement } from "./type";

const ElementsAtom = atom<IElement[]>([]);

const ElementSelected = atom<IElement>({} as IElement);

const remapping = (element: IElement, data: IElement[]): IElement[] => {
  const map = new Map<string, IElement>();
  for (const iterator of data) {
    if (element.id === iterator.id) {
      map.set(element.id, element);
    } else {
      map.set(iterator.id, iterator);
    }
  }
  return Array.from(map.values());
};

const setElsUpAtom = atom(null, (get, set, args: IElement) => {
  const reMap = remapping(args, get(ElementsAtom));
  set(ElementsAtom, reMap);
  set(ElementSelected, args);
});

export { ElementsAtom, ElementSelected, setElsUpAtom };
