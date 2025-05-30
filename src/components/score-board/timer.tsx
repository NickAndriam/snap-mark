import { useTime } from "@/lib/hooks";
import { useTimerStore } from "@/store/timer";
import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

export default function Timer() {
  const { timer, isRunning, restartTimer } = useTimerStore((state) => state);
  const [inputTime, setInputTime] = useState(timer);
  const [editing, setEditing] = useState(false);

  // Time
  const time = useTime(timer);

  const { seconds, minutes, pause, resume, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => console.warn("Timer expired"),
  });

  useEffect(() => {
    if (isRunning) {
      resume();
    } else {
      pause();
    }
    if (restartTimer) restart(time, false);
  }, [isRunning, pause, resume, restartTimer]);

  // Format time to have 0 is digit is 1
  const formatTime = (num: number) => num.toString().padStart(2, "0");

  const onChangeTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [m = "0", s = "0"] = e.target.value.split(":");
    setInputTime(Number(m) * 60 + Number(s));
  };

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + inputTime);
    restart(time, false);
  }, [inputTime, restart]);

  const themeColor =
    minutes > 10
      ? "text-yellow-600"
      : minutes > 5
      ? "text-yellow-600"
      : "text-red-600";

  return (
    <div className="flex flex-col items-center justify-center text-white rounded-lg">
      <div>
        {editing ? (
          <input
            className={`text-[90px] lg:text-[150px] xl:text-[200px] digital opacity-90 ${themeColor}`}
            type="time"
            value={`${formatTime(minutes)}:${formatTime(seconds)}`}
            onChange={onChangeTimer}
            onBlur={() => setEditing(false)}
            autoFocus
          />
        ) : (
          <span
            className={`text-[90px] lg:text-[150px] xl:text-[200px] digital opacity-90 pressed ${themeColor} cursor-pointer`}
            onClick={() => setEditing(true)}
          >
            {formatTime(minutes)}:{formatTime(seconds)}
          </span>
        )}
      </div>
      {/* <div
        className={`${themeColor} opacity-50 cursor-pointer`}
        onClick={() => setRestartTimer(true)}
      >
        <p>RESET</p>
      </div> */}
    </div>
  );
}
