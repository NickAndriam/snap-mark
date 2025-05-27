// Digit.tsx
import React from "react";

type SegmentMap = {
  [key: string]: boolean[];
};

const SEGMENTS: SegmentMap = {
  "0": [true, true, true, true, true, true, false],
  "1": [false, true, true, false, false, false, false],
  "2": [true, true, false, true, true, false, true],
  "3": [true, true, true, true, false, false, true],
  "4": [false, true, true, false, false, true, true],
  "5": [true, false, true, true, false, true, true],
  "6": [true, false, true, true, true, true, true],
  "7": [true, true, true, false, false, false, false],
  "8": [true, true, true, true, true, true, true],
  "9": [true, true, true, true, false, true, true],
};

const Digit: React.FC<{ value: string }> = ({ value }) => {
  const active = SEGMENTS[value] || [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  return (
    <div className="digit">
      {active.map((on, i) => (
        <div key={i} className={`segment s${i + 1} ${on ? "on" : "off"}`} />
      ))}
    </div>
  );
};

export default Digit;
