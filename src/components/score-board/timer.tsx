import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface TimerProps {
  isPlaying: boolean;
  restartTimer: boolean;
}

export default function Timer({ isPlaying, restartTimer }: TimerProps) {
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
    if (isPlaying) {
      resume();
    } else {
      pause();
    }
    if (restartTimer) restart(time, false);
  }, [isPlaying, pause, resume, restartTimer]);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  const themeColor =
    minutes > 10
      ? "text-yellow-600"
      : minutes > 5
      ? "text-yellow-600"
      : "text-red-600";
  return (
    <div className="flex items-center justify-center text-white rounded-lg">
      <div className="">
        <p
          className={`text-[90px] lg:text-[120px] digital opacity-90 pressed ${themeColor}`}
          onClick={() => restart(time, false)}
        >
          {formatTime(minutes)}:{formatTime(seconds)}
        </p>
      </div>
    </div>
  );
}
