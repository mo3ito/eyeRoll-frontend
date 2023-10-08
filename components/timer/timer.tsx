import React, { useEffect, useState } from 'react';

interface TimerProps {
  timeMinutes: number;
  className: string;
  classNameTime: string;
}

const COUNTER_KEY = 'timerCount';

export default function Timer({ timeMinutes, className, classNameTime }: TimerProps) {
  const [countdown, setCountdown] = useState<number>(timeMinutes * 60 || 400);


  useEffect(() => {
    // بازیابی مقدار تایمر از localStorage
    const storedCountdown = localStorage.getItem(COUNTER_KEY);
  
    if (storedCountdown !== null) {
      const parsedCountdown = parseInt(storedCountdown, 10);
      if (!isNaN(parsedCountdown)) {
        setCountdown(parsedCountdown);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 0) {
          // ذخیره مقدار تایمر در localStorage
          localStorage.setItem(COUNTER_KEY, (prevCountdown - 2).toString());
          return prevCountdown - 1;
        }

        // تایمر به اتمام رسیده است
        localStorage.removeItem(COUNTER_KEY);
        clearInterval(timer);
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer); // حذف تایمر در هنگام unmount کردن کامپوننت
  }, []);

  useEffect(() => {
    // از این مکان می‌توانید اقدامات دیگری که نیاز به انجام آنها در هنگام تغییر timeMinutes دارید، انجام دهید.

    // به عنوان مثال، اگر می‌خواهید timeMinutes را تغییر دهید، می‌توانید مقدار countdown را مجدداً تنظیم کنید.

    setCountdown(timeMinutes * 60 || 400);
  }, [timeMinutes]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    const formattedDays = days > 0 ? `${days}d ` : '';
    const formattedHours = hours > 0 ? `${hours}h ` : '';
    const formattedMinutes = minutes > 0 ? `${minutes}m ` : '';
    const formattedSeconds = seconds > 0 ? `${seconds}s` : '';

    return `${formattedDays}${formattedHours}${formattedMinutes}${formattedSeconds}`;
  };

  return (
    <div className={`${className} `}>
      <div className={classNameTime}>{formatTime(countdown)}</div>
    </div>
  );
}