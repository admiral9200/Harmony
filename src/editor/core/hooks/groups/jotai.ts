import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";
import { IPELMT } from "../../elements/type";
import { pageSelectedAtom } from "../pages/jotai";

type IGPOBJ = {
  [key: string]: IPELMT;
};

const groupsAtom = atom<IGPOBJ>({
  "fc506623-b9b8-4a93-925b-e529a59e7607": {
    id: "fc506623-b9b8-4a93-925b-e529a59e7607",
    x: 0,
    y: 0,
    pageId: "885c93f0-a9c5-44db-b1fa-c9d52bdca32c",
    isBlocked: true,
    groupId: "fc506623-b9b8-4a93-925b-e529a59e7607",
    tool: "GROUP",
    visible: true,
    rotate: 0,
    height: 980,
    width: 1440,
    view_position: 1,
    style: {
      stroke: "#000000",
      strokeWidth: 0,
      backgroundColor: "#ffffff",
      isAllBorderRadius: false,
      borderRadius: 0,
      borderRadiusBottomLeft: 0,
      borderRadiusBottomRight: 0,
      borderRadiusTopLeft: 0,
      borderRadiusTopRight: 0,
    },
  },
});

export const listGroupsAtom = atom((get) =>
  Object.values(get(groupsAtom)).filter(
    (item) => item?.pageId === get(pageSelectedAtom)
  )
);

export const groupoSelectedIdAtom = atomWithDefault(
  (get) => get(listGroupsAtom)?.[0]?.groupId
);
export const groupAtom = atom((get) =>
  get(listGroupsAtom)?.find(
    (dataItem) => dataItem?.groupId === get(groupoSelectedIdAtom)
  )
);

export default groupsAtom;
