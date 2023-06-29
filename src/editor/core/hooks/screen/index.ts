/* eslint-disable react-hooks/exhaustive-deps */
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

const screenDimension = atom({
  width: 0,
  height: 0,
});

const useScreen = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useAtom(screenDimension);

  useEffect(() => {
    if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
      setDimensions({
        width: divRef.current.offsetWidth,
        height: divRef.current.offsetHeight,
      });
    }
  }, []);

  return {
    ref: divRef,
    width: dimensions.width,
    height: dimensions.height,
  };
};

export default useScreen;
