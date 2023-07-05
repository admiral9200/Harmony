/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

type Props = {
  callback: () => void;
  ms?: number;
  end?: number;
};

const useCallStkcTime = (props: Props) => {
  const { callback, ms, end } = props;
  const [timer, setTimer] = useState(3);

  const [load, setLoad] = useState(true);
  useEffect(() => {
    const intervalTimer = setInterval(() => {
      if (timer === (end ?? 3)) {
        if (!load) {
          callback();
        }
        setLoad(true);
        clearTimeout(intervalTimer);
      } else {
        setLoad(false);
        setTimer((prev) => prev + 1);
      }
    }, ms ?? 1000);

    return () => clearInterval(intervalTimer);
  }, [timer]);

  return {
    timer,
    ms,
    end,
    setTimer,
    load,
    setLoad,
  };
};

export default useCallStkcTime;
