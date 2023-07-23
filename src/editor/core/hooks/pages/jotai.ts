import { atomWithStorage } from "jotai/utils";

const pagesAtom = atomWithStorage("harmony_pages", [
  {
    id: "885c93f0-a9c5-44db-b1fa-c9d52bdca32c",
  },
]);

export const pageSelectedAtom = atomWithStorage(
  "harmony_selectedPage",
  "885c93f0-a9c5-44db-b1fa-c9d52bdca32c"
);

export default pagesAtom;
