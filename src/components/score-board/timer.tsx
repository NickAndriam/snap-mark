import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface TimerProps {
  state: boolean;
  restartTimer: boolean;
}

export default function Timer({ state, restartTimer }: TimerProps) {
  const minutesInSeconds = 720;
  // Time
  const time = new Date();
  time.setSeconds(time.getSeconds() + minutesInSeconds); // 600 seconds = 10 minutes

  const { seconds, minutes, pause, resume, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => console.warn("Timer expired"),
  });

  useEffect(() => {
    if (state) {
      resume();
    } else {
      pause();
    }
    if (restartTimer) restart(time, false);
  }, [state, pause, resume, restartTimer]);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  const themeColor =
    minutes > 10
      ? "text-yellow-500"
      : seconds > 5
      ? "text-yellow-300"
      : "text-red-500";

  return (
    <div className="flex items-center justify-center text-white rounded-lg">
      <div className="">
        <p
          className={`text-[90px] lg:text-[120px] digital opacity-90 ${themeColor}`}
        >
          {formatTime(minutes)}:{formatTime(seconds)}
        </p>
      </div>
    </div>
  );
}
