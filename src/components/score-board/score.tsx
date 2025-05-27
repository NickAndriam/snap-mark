interface ScoreProps {
  isReversed?: boolean;
  teamName: string;
  reset?: boolean;
  defaultScore?: number;
  score?: number;
  setScore?: (score: number) => void;
}

export default function Score({
  isReversed = false,
  teamName,
  score = 0,
}: ScoreProps) {
  return (
    <div className="flex flex-col items-center justify-center text-left min-w-auto max-w-[150px] lg:min-w-[200px] lg:max-w-[250px] gap-4">
      <input
        placeholder="test"
        className="text-4xl font-bold mb-5 w-full text-center"
        defaultValue={teamName}
      />
      <div
        style={{ flexDirection: isReversed === true ? "row-reverse" : "row" }}
        className="flex items-center justify-end"
      >
        {/* Score and button */}
        <div className="flex flex-col items-center justify-center   ">
          <h3 className="text-[200px] lg:[200px] font-bold digital leading-none">
            {score < 10 ? `0${score}` : score}
          </h3>
        </div>
      </div>
      <div
        style={{ justifyContent: isReversed === true ? "left" : "right" }}
        className="flex items-center gap-4"
      ></div>
    </div>
  );
}
