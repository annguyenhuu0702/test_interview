import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useTimer = (): [number, Dispatch<SetStateAction<number>>] => {
  const [timer, setTimer] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    if (timer > 0) {
      setSeconds(timer);
      const interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      const timerOut = setTimeout(() => {
        window.alert("Congratulation!!");
        setTimer(0);
      }, 1000 * timer);
      return () => {
        clearTimeout(timerOut);
        clearInterval(interval);
      };
    }
  }, [timer]);

  return [seconds, setTimer];
};

export default useTimer;
