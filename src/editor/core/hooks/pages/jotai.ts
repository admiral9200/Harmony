import { atomWithStorage } from "jotai/utils";

export const pageIdDefault = "885c93f0-a9c5-44db-b1fa-c9d52bdca32c";

const pagesAtom = atomWithStorage("harmony_pages", [
  {
    id: pageIdDefault,
  },
]);

export const pageSelectedAtom = atomWithStorage(
  "harmony_selectedPage",
  pageIdDefault
);

export default pagesAtom;
