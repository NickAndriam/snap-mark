interface ScoreButtonsProps {
  score: number;
  getScore: (score: number) => void;
}

export default function ScoreButtons({ score, getScore }: ScoreButtonsProps) {
  return (
    <div className="text-2xl flex flex-col items-center justify-center gap-2 lg:gap-5 opacity-80">
      <p
        className="text-4xl pressed cursor-pointer active:text-green-500"
        onClick={() => getScore(1)}
      >
        +
      </p>
      <Number number={3} onClick={() => getScore(3)} />
      <Number number={2} onClick={() => getScore(2)} />
      <Number number={1} onClick={() => getScore(1)} />
      <p
        className="text-4xl pressed cursor-pointer active:text-red-500"
        onClick={() => getScore(score !== 0 ? -1 : 0)}
      >
        -
      </p>
    </div>
  );
}

const Number = ({
  number,
  onClick,
}: {
  number: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="border border-white/20 w-8 h-8 rounded-full text-lg flex items-center justify-center pressed cursor-pointer active:bg-green-500"
      onClick={onClick}
    >
      <p className="pressed">{number}</p>
    </div>
  );
};
