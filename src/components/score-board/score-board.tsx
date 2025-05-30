import Score from "./score";
import Timer from "./timer";
import ShotClock from "./shot-clock";
import Foul from "./foul";
import Period from "./period";
import LeftSideBar from "./sidebar/left-sidebar";
import RightSideBar from "./sidebar/right-sidebar";

export default function ScoreBoard() {
  // const handleKeyDown = useCallback((e: KeyboardEvent) => {
  //   // if (e.repeat) return; // Prevent holding key
  //   console.log("Current key: ", e.key);
  //   if (e.shiftKey && e.key === "ArrowUp") {
  //     setAwayTeam((prev) => ({ ...prev, score: prev.score + 1 }));
  //     return;
  //   }
  //   if (e.shiftKey && e.key === "ArrowDown") {
  //     setAwayTeam((prev) => ({ ...prev, score: prev.score - 1 }));
  //     return;
  //   }
  //   switch (e.key) {
  //     case "ArrowUp": // Home +1
  //       setHomeTeam((prev) => ({
  //         ...prev,
  //         score: Math.max(0, prev.score + 1),
  //       }));
  //       break;
  //     case "ArrowDown": // Home -1
  //       setHomeTeam((prev) => ({
  //         ...prev,
  //         score: Math.max(0, prev.score - 1),
  //       }));
  //       break;

  //     case "Backspace": // Reset ShotClock
  //       setResetShotClock(true);
  //       setTimeout(() => {
  //         setResetShotClock(false);
  //       }, 100);
  //       break;
  //     case "r": // Reset Everything
  //       onFullReset();
  //       break;
  //     case " ": // Spacebar: start/stop timer
  //       setStartTimer((prev) => !prev);
  //       break;
  //     default:
  //       break;
  //   }
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [handleKeyDown]);
  return (
    <div className="flex">
      {/* Left Bar */}
      <LeftSideBar />
      {/* Main Scoreboard */}
      <div className="relative select-none text-white w-full flex flex-col gap-2 items-center justify-evenly px-20 lg:px-30 xl:px-50 2xl:px-70 lg:py-20">
        {/* Timer, Fouls */}
        <div className="w-full flex items-center justify-between">
          <Foul type="home" />
          <div className="w-full space-y-5 lg:space-y-10">
            {/* ScoreBoard Title */}
            <div className="w-full hidden lg:flex">
              <input
                className="text-3xl w-full digital text-white/80 lg:text-[80px] text-center "
                defaultValue="BasketBall Tournament 2025 "
              />
            </div>
            <Timer />
          </div>
          <Foul type="away" />
        </div>
        {/* Score, ShotClock */}
        <div className="w-full flex flex-row items-center justify-between z-10 text-white rounded-lg">
          <Score type="home" />
          <div className="flex flex-col items-center justify-center gap-5 lg:gap-10">
            <ShotClock />
            <Period />
          </div>
          <Score type="away" />
        </div>
      </div>
      {/* Right Bar */}
      <RightSideBar />
    </div>
  );
}
