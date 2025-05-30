import { useAwayTeamStore } from "@/store/awayTeam";
import { useHomeTeamStore } from "@/store/homeTeam";

interface FoulProps {
  type: string;
}
export default function Foul({ type }: FoulProps) {
  const { fouls: homeFouls, setFouls: setHomeFouls } = useHomeTeamStore(
    (state) => state
  );
  const { fouls: awayFouls, setFouls: setAwayFouls } = useAwayTeamStore(
    (state) => state
  );

  function onAddingFouls() {
    if (type === "home") {
      setHomeFouls(homeFouls !== 6 ? homeFouls + 1 : 6);
    } else {
      setAwayFouls(awayFouls !== 6 ? awayFouls + 1 : 6);
    }
  }
  function onRemovingFouls() {
    if (type === "home") {
      setHomeFouls(homeFouls !== 0 ? homeFouls - 1 : 0);
    } else {
      setAwayFouls(awayFouls !== 0 ? awayFouls - 1 : 0);
    }
  }

  return (
    <div className="digital">
      <p className="text-2xl lg:text-3xl xl:text-[3rem] opacity-50">Fouls</p>
      <div className="flex gap-2 items-center justify-center">
        <p className="text-4xl opacity-50 pressed" onClick={onRemovingFouls}>
          -
        </p>
        <p className="text-4xl lg:text-6xl text-blue-500 -mb-2">
          {type === "home" ? homeFouls : awayFouls}
        </p>
        <p className="text-4xl  opacity-50 pressed" onClick={onAddingFouls}>
          +
        </p>
      </div>
    </div>
  );
}
