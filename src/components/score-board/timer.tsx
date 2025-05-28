import { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface TimerProps {
  isPlaying: boolean;
  restartTimer: boolean;
  defaultTime: number;
}

export default function Timer({
  defaultTime,
  isPlaying,
  restartTimer,
}: TimerProps) {
  const [inputTime, setInputTime] = useState(defaultTime);
  const [editing, setEditing] = useState(false);

  // Time
  const time = new Date();
  time.setSeconds(time.getSeconds() + defaultTime);

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
    <div className="flex items-center justify-center text-white rounded-lg">
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
    </div>
  );
}
