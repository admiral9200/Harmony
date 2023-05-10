import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { IElement } from "./type";

const ElementsAtom = atomWithStorage<IElement[]>("harmonyStorage", []);

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

const setElementDeleteAtom = atom(null, (get, set, args: IElement) => {
  const reMap = get(ElementsAtom)?.filter((item) => item?.id !== args?.id);
  console.log(reMap, "sdfasdf");

  set(ElementsAtom, reMap);
});

export { ElementsAtom, ElementSelected, setElsUpAtom, setElementDeleteAtom };
