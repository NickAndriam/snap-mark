import React from "react";

export default function Foul() {
  const [fouls, setFouls] = React.useState(0);
  return (
    <div className="digital">
      <p className="text-2xl lg:text-4xl">FOUL</p>
      <div className="flex gap-2 items-center justify-center">
        <p
          className="text-4xl opacity-50 pressed"
          onClick={() => setFouls(fouls === 0 ? 0 : fouls - 1)}
        >
          -
        </p>
        <p className="text-4xl lg:text-6xl text-blue-500 -mb-2">{fouls}</p>
        <p
          className="text-4xl  opacity-50 pressed"
          onClick={() => setFouls(fouls !== 6 ? fouls + 1 : 6)}
        >
          +
        </p>
      </div>
    </div>
  );
}
