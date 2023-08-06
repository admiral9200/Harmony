/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";
import { IPELMT } from "../../elements/type";
import groupsAtom, {
  groupAtom,
  groupDefaultId,
  groupoSelectedIdAtom,
  listGroupsAtom,
} from "./jotai";

const useGroups = () => {
  const [groups, setGroups] = useAtom(groupsAtom);

  const listGroups = useAtomValue(listGroupsAtom);
  const group = useAtomValue(groupAtom);
  const [groupSelectId, setGroupSelectId] = useAtom(groupoSelectedIdAtom);
  const handleAddGroup = (data: IPELMT) => {
    if (data?.id) {
      setGroups((prev) => {
        return Object.assign({}, prev, { [`${data?.id}`]: data });
      });
    }
  };
  const handleDeleteGroup = (groupId: string) => {
    setGroups((prev) => {
      if (groupId === groupDefaultId) return prev;
      if (Object?.values(prev)?.length === 1) return prev;
      delete prev[groupId];

      const dataGroups = Object.assign({}, prev);
      setGroupSelectId(Object.values(prev)?.[0]?.groupId);
      return dataGroups;
    });
  };
  const handleDeleteManyGroups = useCallback((ids: string[]) => {
    setGroups((prev) => {
      const totalGroups = Object?.values(prev)?.length;
      if (totalGroups === 1) return prev;

      for (const iterator of ids) {
        if (iterator === groupDefaultId) break;
        if (Object?.values(prev)?.length === 1) break;
        delete prev[iterator];
      }
      const data = Object.assign({}, prev);
      setGroupSelectId(Object.values(prev)?.[0]?.groupId);
      return data;
    });
  }, []);

  return {
    handleAddGroup,
    listGroups,
    groups,
    group,
    groupSelectId,
    handleDeleteManyGroups,
    setGroupSelectId,
    handleDeleteGroup,
  };
};

export default useGroups;
