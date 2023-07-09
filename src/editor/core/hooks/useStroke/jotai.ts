import { atom } from "jotai";
import harmonyZoomAtom from "../zoom/jotai";

const threads = {
  1: 0.043056764313424416,
  2: 0.09229599817706398,
  3: 0.17985878990921353,
  4: 0.3504938994813921,
  5: 0.7513148009015773,
  6: 1.6105099999999999,
  7: 2.853116706110001,
  8: 3.0544702849929415,
  9: 4.6105099999999999,
  10: 5.853116706110001,
  11: 6.0544702849929415,
};

const strokeWidth = {
  1: 40,
  2: 25,
  3: 8,
  4: 8,
  5: 4,
  6: 3,
  7: 2,
  8: 1,
  9: 0.5,
  10: 0.2,
  11: 0.2,
};

const strokeAtom = atom((get) => {
  const scale = get(harmonyZoomAtom)?.scale;
  for (let [key, value] of Object.entries(threads)) {
    if (scale >= Number(value)) {
      return strokeWidth[Number(key) as keyof typeof strokeWidth];
    } else {
      break;
    }
  }
});

export default strokeAtom;
