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

  // const [shotClock, setShotClock] = useState({
  //   seconds: 14,
  //   isRunning: true,
  // });

  const [defaultScore] = useState<number>(0);

  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [restartTimer, setRestartTimer] = useState<boolean>(false);

  console.log("Away team score", awayTeam);
  console.log("Home team score", homeTeam);

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

  return (
    <div className="flex">
      <div className="fixed left-0 top-0 flex flex-col items-center justify-between lg:justify-evenly h-full w-10 py-4 lg:py-0 z-100">
        {startTimer ? (
          <Pause
            size={30}
            className="opacity-60 text-green-500"
            onClick={() => setStartTimer(false)}
          />
        ) : (
          <Play
            size={30}
            className="opacity-60 text-green-500"
            onClick={() => setStartTimer(true)}
          />
        )}

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
      <div className="relative select-none text-white w-full flex flex-col gap-2 items-center justify-evenly px-20 lg:px-40 xl:px-96">
        <div className="w-full flex items-center justify-between">
          <Foul />
          <Timer state={startTimer} restartTimer={restartTimer} />
          <Foul />
        </div>
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
            <ShotClock />
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
      <div className="fixed right-0 top-0 flex flex-col items-center justify-between lg:justify-evenly h-full w-10 py-4 lg:py-0 z-100">
        <RotateCcw size={25} className=" text-red-500" onClick={onFullReset} />
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
