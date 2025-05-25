import { Menu, Pause, Play, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useTimer } from "react-timer-hook";

// interface TimerProps {
//   expiryTimestamp?: Date;
// }

export default function Timer() {
  const minutesInSeconds = 720;
  // Time
  const time = new Date();
  time.setSeconds(time.getSeconds() + minutesInSeconds); // 600 seconds = 10 minutes

  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
    onExpire: () => console.warn("Timer expired"),
  });

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-between w-full h-min bg-black/5 backdrop-blur-2xl text-white p-4 rounded-lg digital">
      <div className="space-y-10">
        <Quarter name="1st" />
        <Quarter name="2nd" />
      </div>
      <div className="space-y-5">
        <p className=" text-[70px] digital opacity-90 leading-14">
          {formatTime(minutes)}:{formatTime(seconds)}
          {/* 10:00 */}
        </p>
        <div className="w-full flex items-center justify-evenly cursor-pointer ">
          <Menu className="pressed opacity-50" />
          {/* <StepBack size={30} /> */}
          {isRunning ? (
            <Pause size={40} onClick={pause} className="pressed opacity-80" />
          ) : (
            <Play size={40} onClick={resume} className="pressed opacity-80" />
          )}
          {/* <StepForward /> */}
          <RotateCcw
            onClick={() => {
              const newTime = new Date();
              newTime.setSeconds(newTime.getSeconds() + minutesInSeconds);
              restart(newTime, false);
            }}
            className="pressed opacity-50"
          />
        </div>
      </div>
      <div className="space-y-10">
        <Quarter name="3rd" />
        <Quarter name="4th" />
      </div>
    </div>
  );
}

function Quarter({ name }: { name: string; active?: boolean }) {
  const [active, setActive] = useState(false);
  return (
    <div
      style={{ backgroundColor: active ? "green" : "transparent" }}
      className="bg-black/5 backdrop-blur-2xl border border-white rounded-lg p-2 hover:bg-black hover:cursor-pointer active:scale-95 active:bg-black"
      onClick={() => setActive(!active)}
    >
      <div>{name}</div>
    </div>
  );
}
