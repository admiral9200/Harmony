import { atomWithStorage } from "jotai/utils";

const harmonyZoomAtom = atomWithStorage("harmony_zoom", {
  scale: 1,
  x: 0,
  y: 0,
  evt: {} as WheelEvent,
});

export const harmony_StrokeWidthSelection = atomWithStorage(
  "harmony_stroke_width",
  2
);

export default harmonyZoomAtom;
