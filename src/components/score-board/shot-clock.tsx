import { useState } from "react";
import { useTimer } from "react-timer-hook";

export default function ShotClock() {
  const [minutesInSeconds, setMinutesInSeconds] = useState(24); // minutesInSeconds

  // Time
  const time = new Date();
  time.setSeconds(time.getSeconds() + minutesInSeconds); // 600 seconds = 10 minutes

  const { seconds, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => console.warn("Timer expired"),
  });

  const themeColor =
    seconds > 10
      ? "text-green-500"
      : seconds > 3
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <h3
        className={`text-[60px] lg:[90px] font-bold digital leading-none text-green-500 w-16 pressed
            ${themeColor} cursor-pointer`}
        onClick={() => (isRunning ? pause() : resume())}
      >
        {seconds}
      </h3>
      <div className="flex flex-col items-center justify-center gap-2 opacity-80">
        <p
          className="text-xs text-green-500 border border-green-500 px-2 pressed active:bg-green-500 active:text-white"
          onClick={() => restart(time, true)}
        >
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
