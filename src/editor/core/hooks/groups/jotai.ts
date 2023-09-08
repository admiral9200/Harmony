import { groups } from "@/assets/default";
import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";
import { Group } from "konva/lib/Group";
import { IPELMT } from "../../elements/type";
import { pageSelectedAtom } from "../pages/jotai";

type IGPOBJ = {
  [key: string]: IPELMT;
};

export const groupDefaultId = "fc506623-b9b8-4a93-925b-e529a59e7607";

const groupsAtom = atom(groups as IGPOBJ);

export const listGroupsAtom = atom((get) =>
  Object.values(get(groupsAtom)).filter(
    (item) => item?.pageId === get(pageSelectedAtom)
  )
);

export const groupoSelectedIdAtom = atomWithDefault(
  (get) => get(listGroupsAtom)?.[0]?.groupId
);
export const groupAtom = atom(
  (get) =>
    get(listGroupsAtom)?.find(
      (dataItem) => dataItem?.groupId === get(groupoSelectedIdAtom)
    )
);

export const groupRefAtom = atom<Group>({} as Group);

export default groupsAtom;
