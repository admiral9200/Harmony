import { atomWithStorage } from "jotai/utils";

const harmonyZoomAtom = atomWithStorage("harmony_zoom", {
  scale: 1,
  x: 0,
  evt: {} as WheelEvent,
  y: 0,
});

export default harmonyZoomAtom;
