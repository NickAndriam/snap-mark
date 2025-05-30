import { useTime } from "@/lib/hooks";
import { useTimerStore } from "@/store/timer";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export default function ShotClock() {
  const { isRunning, shotClock, restartShotClock } = useTimerStore(
    (state) => state
  );

  // Time hook to get default time
  const time = useTime(shotClock);

  // Hook to manipulate the timer
  const { seconds, pause, resume, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => {
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + shotClock);
      restart(newTime, false);
    },
  });

  // Pause, Play, Restart when 0 Shot Clock
  useEffect(() => {
    if (isRunning) {
      resume();
    } else {
      pause();
    }
    if (shotClock === 0) restart(time, true);
  }, [isRunning, pause, resume, shotClock, restart]);

  // Reset Shot Clock when restartShotClock is true
  useEffect(() => {
    if (restartShotClock) {
      restart(time, true);
    }
  }, [restartShotClock, restart]);

  const themeColor = seconds > 10 ? "text-green-500" : "text-red-500";

  return (
    <div className="flex flex-col items-center justify-center gap-1 ">
      <input
        type="number"
        className={`text-[60px] lg:text-[100px] font-bold digital leading-none text-center w-40
            ${themeColor} cursor-pointer`}
        value={seconds}
        onChange={(e) => {
          const newTime = new Date();
          newTime.setSeconds(newTime.getSeconds() + Number(e.target.value));
          restart(newTime, false);
        }}
      />
      <div className="flex flex-row items-center justify-center gap-2 opacity-80 border border-green-500">
        <p
          className="text-xs text-green-500 border border-green-500 px-2 pressed active:bg-green-500 active:text-white"
          onClick={() => restart(time, true)}
        >
          RESET
        </p>
      </div>
    </div>
  );
}
