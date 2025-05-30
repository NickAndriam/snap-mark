import { useAwayTeamStore } from "@/store/awayTeam";
import { useHomeTeamStore } from "@/store/homeTeam";

interface ScoreProps {
  type?: string;
}

export default function Score({ type }: ScoreProps) {
  const { name, score, setName } = useHomeTeamStore((state) => state);

  const {
    name: awayName,
    score: awayScore,
    setName: setAwayName,
  } = useAwayTeamStore((state) => state);

  const formatScore = () => {
    if (type === "home") {
      if (score < 10) {
        return `0${score}`;
      }
      return score;
    } else {
      if (awayScore < 10) {
        return `0${awayScore}`;
      }
      return awayScore;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center text-left min-w-auto max-w-[150px] lg:min-w-[200px] lg:max-w-[250px] gap-4">
      <input
        placeholder="Name"
        className="text-4xl lg:text-6xl font-bold mb-5 w-full text-center"
        onChange={(e) =>
          type === "home"
            ? setName(e.target.value)
            : setAwayName(e.target.value)
        }
        value={type === "home" ? name : awayName}
      />
      <div className="flex items-center justify-end">
        {/* Score and button */}
        <h3 className="text-[200px] lg:text-[300px] xl:text-[400px]  font-bold digital leading-none">
          {formatScore()}
        </h3>
      </div>
      <div className="flex items-center gap-4"></div>
    </div>
  );
}
