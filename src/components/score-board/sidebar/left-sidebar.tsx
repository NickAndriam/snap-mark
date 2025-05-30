import { Pause, Play, Settings } from "lucide-react";
import ScoreButtons from "../score-buttons";
import { useTimerStore } from "@/store/timer";
import { useHomeTeamStore } from "@/store/homeTeam";
import { useActions } from "@/store/actions";

export default function LeftSideBar() {
  const { isRunning, setIsRunning } = useTimerStore((state) => state);
  const { score, setScore } = useHomeTeamStore((state) => state);
  const { setOpenSettings } = useActions((state) => state);
  return (
    <div className="fixed left-0 top-0 flex flex-col items-center justify-between lg:justify-evenly h-full w-10 py-4 lg:py-0 z-100">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          {isRunning ? (
            <Pause
              size={30}
              className="opacity-60 text-green-500 pressed"
              onClick={() => setIsRunning(false)}
            />
          ) : (
            <Play
              size={30}
              className="opacity-60 text-green-500 pressed"
              onClick={() => setIsRunning(true)}
            />
          )}
        </div>
        <Settings
          size={30}
          className="text-gray-300 pressed"
          onClick={() => setOpenSettings(true)}
        />
      </div>
      <ScoreButtons
        score={score}
        getScore={(point) => setScore(score + point)}
      />
    </div>
  );
}
