import React, { useCallback, useEffect, useRef, useState } from "react";

// 사용자 정의 hook
const useCounter = (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const [startBtn, setStartBtn] = useState(false);
  const intervalRef = useRef(null);

  // ** 시작 **
  const start = useCallback(() => {
    setStartBtn(true);
    intervalRef.current = setInterval(async () => {
      setCount(c => c + 1);
    }, ms);
  }, []);

  // ** 중단 **
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    setStartBtn(false);
    clearInterval(intervalRef.current);
    initialValue = count;
  }, []);

  // ** 끝 **
  const end = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    setStartBtn(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  }, []);

  // ** 리셋 **
  const reset = useCallback(() => {
    setCount(0);
    end();
  }, []);

  return { count, startBtn, start, end, stop, reset };
};

export default function SetTimer() {
  // 시, 분, 초를 state로 저장
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const { count, startBtn, stopBtn, endBtn, start, end, stop } = useCounter(0, 1000);

  // 타이머 기능
  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes & 60;
    const seconds = count % 60;

    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  };

  // count의 변화에 따라 timer 함수 렌더링
  useEffect(timer, [count]);

  return (
    <>
      <h1>
        {currentHours < 10 ? `0${currentHours}` : currentHours} :
        {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
        {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
      </h1>
      <button disabled={startBtn} onClick={start}>
        Start
      </button>
      <button onClick={stop}>Stop</button>
      <button onClick={end}>End</button>
      {/* <button onClick={reset}>Reset</button> */}
    </>
  );
}
