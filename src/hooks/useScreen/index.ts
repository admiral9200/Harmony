/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useEffect, useRef, useState } from "react";

type UseScreenProps = {
  deps?: DependencyList;
};

const useScreen = <T extends HTMLDivElement>({ deps }: UseScreenProps) => {
  const divRef = useRef<T>(null);
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
  }, [...(deps ?? [])]);
  return {
    ref: divRef,
    dimensions,
  };
};

export default useScreen;
