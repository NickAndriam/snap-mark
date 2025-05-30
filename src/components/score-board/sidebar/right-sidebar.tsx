import { RotateCcw, TimerReset } from "lucide-react";
import ScoreButtons from "../score-buttons";
import { useAwayTeamStore } from "@/store/awayTeam";
import { useTimerStore } from "@/store/timer";
import { useHomeTeamStore } from "@/store/homeTeam";

export default function RightSideBar() {
  const {
    score: awayScore,
    setScore: setAwayScore,
    resetFouls: resetHomeFouls,
  } = useAwayTeamStore((state) => state);
  const { setScore: setHomeScore, resetFouls: resetAwayFouls } =
    useHomeTeamStore((state) => state);
  const { setRestartShotClock, setRestartTimer } = useTimerStore(
    (state) => state
  );

  const onFullReset = () => {
    setHomeScore(0);
    setAwayScore(0);
    setRestartShotClock(true);
    setRestartTimer(true);
    resetAwayFouls();
    resetHomeFouls();
    setTimeout(() => {
      setRestartShotClock(false);
      setRestartTimer(false);
    }, 1000);
  };
  return (
    <div className="fixed right-0 top-0 flex flex-col items-center justify-between lg:justify-evenly h-full w-10 py-4 lg:py-0 z-100">
      <div className="flex flex-col items-center justify-center gap-4">
        <RotateCcw
          size={30}
          className=" text-red-500 pressed"
          onClick={onFullReset}
        />
        <TimerReset
          size={30}
          className=" text-yellow-600 pressed"
          onClick={() => setRestartTimer(true)}
        />
        <p
          className="rounded-full border border-green-500 text-green-500 w-7 h-7 flex items-center justify-center pressed active:bg-green-500"
          onClick={() => setRestartShotClock(true)}
        >
          24
        </p>
      </div>
      <ScoreButtons
        score={awayScore}
        getScore={(point) => setAwayScore(awayScore + point)}
      />
    </div>
  );
}
