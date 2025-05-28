import Score from "./score";
import Timer from "./timer";
import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import ShotClock from "./shot-clock";
import Foul from "./foul";
import Period from "./period";
import ScoreButtons from "./score-buttons";

export default function ScoreBoard() {
  // State for teams, period, and shot clock
  // Using useState to manage the state of the teams, period, and shot clock
  const [homeTeam, setHomeTeam] = useState({
    name: "Lions",
    score: 0,
    fouls: 0,
  });
  const [awayTeam, setAwayTeam] = useState({
    name: "Tigers",
    score: 0,
    fouls: 0,
  });
  const [period, setPeriod] = useState(1);

  const [timerAndShotclock] = useState({
    shotclock: 24,
    timer: 720,
    isRunning: true,
  });

  const [defaultScore] = useState<number>(0);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [restartTimer, setRestartTimer] = useState<boolean>(false);
  const [resetShotClock, setResetShotClock] = useState<boolean>(false);

  const onFullReset = () => {
    setHomeTeam({
      name: "Lions",
      score: 0,
      fouls: 0,
    });
    setAwayTeam({
      name: "Lions",
      score: 0,
      fouls: 0,
    });
    setRestartTimer(true);
  };

  useEffect(() => {
    if (restartTimer) {
      setTimeout(() => {
        setRestartTimer(false);
      }, 100);
    }
  }, [restartTimer, setRestartTimer]);

  useEffect(() => {
    setResetShotClock(true);
    setStartTimer(false);
    const timeout = setTimeout(() => {
      setResetShotClock(false);
      // setStartTimer(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, [homeTeam.score, awayTeam.score]);

  return (
    <div className="flex">
      {/* Left Bar */}
      <div className="fixed left-0 top-0 flex flex-col items-center justify-between lg:justify-evenly h-full w-10 py-4 lg:py-0 z-100">
        <div>
          {startTimer ? (
            <Pause
              size={30}
              className="opacity-60 text-green-500 pressed"
              onClick={() => setStartTimer(false)}
            />
          ) : (
            <Play
              size={30}
              className="opacity-60 text-green-500 pressed"
              onClick={() => setStartTimer(true)}
            />
          )}
        </div>
        <ScoreButtons
          score={homeTeam.score}
          getScore={(point) =>
            setHomeTeam((prev) => ({
              ...prev,
              score: homeTeam.score + point,
            }))
          }
        />
      </div>
      {/* Main Scoreboard */}
      <div className="relative select-none text-white w-full flex flex-col gap-2 items-center justify-evenly px-20 lg:px-30 xl:px-50 2xl:px-70 lg:py-20">
        {/* Timer, Fouls */}
        <div className="w-full flex items-center justify-between">
          <Foul
            fouls={homeTeam.fouls}
            setFouls={(currentFouls) =>
              setHomeTeam({ ...homeTeam, fouls: currentFouls })
            }
          />
          <div className="w-full space-y-5 lg:space-y-10">
            <div className="w-full ">
              <input
                className="text-3xl w-full digital text-white/80 lg:text-[80px] text-center "
                defaultValue="BasketBall Tournament 2025 "
              />
            </div>
            <Timer
              isPlaying={startTimer}
              restartTimer={restartTimer}
              defaultTime={timerAndShotclock.timer}
            />
          </div>
          <Foul
            fouls={awayTeam.fouls}
            setFouls={(currentFouls) =>
              setAwayTeam({ ...awayTeam, fouls: currentFouls })
            }
          />
        </div>
        {/* Score, ShotClock */}
        <div className="w-full flex flex-row items-center justify-between z-10 text-white rounded-lg">
          <Score
            teamName={homeTeam.name}
            defaultScore={defaultScore}
            score={homeTeam.score}
            setScore={(currentScore) =>
              setHomeTeam((prev) => ({
                ...prev,
                score: currentScore,
              }))
            }
          />
          <div className="flex flex-col items-center justify-center gap-10">
            <ShotClock
              isPlaying={startTimer}
              restartTimer={restartTimer || resetShotClock}
              resetShotClock={resetShotClock}
              defaultTime={timerAndShotclock.shotclock}
            />
            <Period period={period} setPeriod={setPeriod} />
          </div>
          <Score
            teamName={awayTeam.name}
            defaultScore={defaultScore}
            score={awayTeam.score}
            setScore={(currentScore) =>
              setAwayTeam((prev) => ({
                ...prev,
                score: currentScore,
              }))
            }
          />
        </div>
      </div>
      {/* Right Bar */}
      <div className="fixed right-0 top-0 flex flex-col items-center justify-between lg:justify-evenly h-full w-10 py-4 lg:py-0 z-100">
        <RotateCcw
          size={25}
          className=" text-red-500 pressed"
          onClick={onFullReset}
        />
        <ScoreButtons
          score={awayTeam.score}
          getScore={(point) =>
            setAwayTeam((prev) => ({
              ...prev,
              score: awayTeam.score + point,
            }))
          }
        />
      </div>
    </div>
  );
}
