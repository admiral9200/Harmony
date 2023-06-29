/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const useScreen = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

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
