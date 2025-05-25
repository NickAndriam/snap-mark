import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ScoreProps {
  isReversed?: boolean;
  name: string;
}

export default function Score({ isReversed = false, name }: ScoreProps) {
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center text-left min-w-auto max-w-[150px] lg:min-w-[200px] lg:max-w-[250px]">
      <h2
        id="name"
        className="text-4xl font-bold mb-5"
        contentEditable
        onChange={() => alert("test")}
      >
        {name.slice(0, 10)}
      </h2>
      <div
        style={{ flexDirection: isReversed === true ? "row-reverse" : "row" }}
        className="flex items-center justify-end"
      >
        {/* Increase and Decrease */}
        <div className="flex flex-col justify-between items-center text-[20px] gap-10"></div>

        {/* Score and button */}
        <div className="flex flex-col items-center justify-center my-5">
          <ChevronUp
            onClick={() => setScore(score + 1)}
            size={30}
            className="opacity-30 pressed"
          />
          <h3 className="text-[120px] lg:[180px] font-bold digital leading-none">
            {score < 10 ? `0${score}` : score}
          </h3>
          <ChevronDown
            onClick={() => (score <= 0 ? null : setScore(score - 1))}
            size={30}
            className="opacity-30 pressed -mt-5"
          />
        </div>
      </div>
      <div
        style={{ justifyContent: isReversed === true ? "left" : "right" }}
        className="flex items-center gap-4"
      >
        {/* <Point text="-1" onClick={() => setScore(score - 1)} /> */}
        <Point number={1} onClick={() => setScore(score + 1)} />
        <Point number={2} onClick={() => setScore(score + 2)} />
        <Point number={3} onClick={() => setScore(score + 3)} />
      </div>
    </div>
  );
}

function Point({ text = "", number = 2, ...props }) {
  return (
    <div
      {...props}
      className="w-10 h-10 font-extrabold grid place-items-center rounded-2xl border border-white bg-black/5 backdrop-blur-2xl hover:bg-black hover:cursor-pointer active:scale-95 active:bg-black
      opacity-60 hover:opacity-100 active:opacity-100"
    >
      {text || number}
    </div>
  );
}
