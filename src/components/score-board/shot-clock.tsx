import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface ShotClockProps {
  isPlaying: boolean;
  restartTimer: boolean;
  resetShotClock: boolean;
}

export default function ShotClock({
  isPlaying,
  restartTimer,
  resetShotClock,
}: ShotClockProps) {
  const [minutesInSeconds, setMinutesInSeconds] = useState(24); // minutesInSeconds

  // Time
  const time = new Date();
  time.setSeconds(time.getSeconds() + minutesInSeconds); // 600 seconds = 10 minutes

  const { seconds, pause, resume, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + minutesInSeconds);
      restart(newTime, false);
    },
  });

  // Global Reset
  useEffect(() => {
    if (isPlaying) {
      resume();
    } else {
      pause();
    }
    if (restartTimer) restart(time, false);
  }, [isPlaying, pause, resume, restartTimer]);

  // Reset Shot Clock when resetShotClock is true
  useEffect(() => {
    if (resetShotClock) {
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + minutesInSeconds);
      restart(newTime, false);
    }
  }, [resetShotClock, minutesInSeconds, restart]);

  const themeColor = seconds > 10 ? "text-green-500" : "text-red-500";

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <h3
        className={`text-[60px] lg:[90px] font-bold digital leading-none text-green-500 w-16 pressed
            ${themeColor} cursor-pointer`}
        onClick={() => restart(time, true)}
      >
        {seconds}
      </h3>
      <div className="flex flex-row items-center justify-center gap-2 opacity-80 border border-green-500">
        <p className="text-xs text-green-500 border border-green-500 px-2 pressed active:bg-green-500 active:text-white">
          RESET
        </p>
        <input
          type="number"
          className="text-[20px] lg:[20px] w-6 font-bold digital leading-none text-gray-500 text-center p-0"
          defaultValue={minutesInSeconds}
          onChange={(e) => {
            setMinutesInSeconds(Number(e.target.value));
          }}
          onBlur={() => restart(time, false)}
        />
      </div>
    </div>
  );
}
