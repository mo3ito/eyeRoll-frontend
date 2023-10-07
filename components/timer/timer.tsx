import React, { useEffect, useState } from 'react';

const COUNTER_KEY = 'timerCount';


export default function Timer({timeMinutes}:{timeMinutes : number}) {

  const [countdown, setCountdown] = useState<number>(timeMinutes*60 || 400);
 
  

  useEffect(() => {
    // بازیابی مقدار تایمر از localStorage
    const storedCountdown = parseInt(localStorage.getItem(COUNTER_KEY), 10);

    if (!isNaN(storedCountdown)) {
      setCountdown(storedCountdown);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          // ذخیره مقدار تایمر در localStorage
          localStorage.setItem(COUNTER_KEY, prevCountdown - 2);
          return prevCountdown - 1;
        }

        // تایمر به اتمام رسیده است
        localStorage.removeItem(COUNTER_KEY);
        clearInterval(timer);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time : number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <p>زمان باقی‌مانده: {formatTime(countdown)}</p>
    </div>
  );
}