import { useState } from "react";

function Test() {
  const [number, setNumber] = useState(0);
  const [increaseBy, setIncreaseBy] = useState(1);
  const [decreaseBy, setDecreaseBy] = useState(1);

  function onDecrease() {
    if (number === 0) return;
    setNumber(number - decreaseBy);
  }

  const onIncrease = () => {
    setNumber(number + increaseBy);
  };

  function onGettingIncreaseNumber(event: any) {
    const value = +event.target.value;
    setIncreaseBy(value);
  }
  function onGettingDecreaseNumber(event: any) {
    const value = +event.target.value;
    setDecreaseBy(value);
  }

  console.log("Increased by: ", increaseBy);
  console.log("Number: ", number);

  return (
    <div>
      <p className="text-black my-10">Number {number}</p>
      <div className="flex gap-4">
        {/* Increase */}
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            title="test"
            placeholder="Inc"
            className="border text-black w-14"
            type="number"
            onChange={onGettingIncreaseNumber}
          />
          <button className="text-white" onClick={onIncrease}>
            Increase
          </button>
        </div>
        {/* Decrease */}
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            title="test"
            placeholder="Dec"
            className="border text-black w-14"
            type="number"
            onChange={onGettingDecreaseNumber}
          />
          <button className="text-white" onClick={onDecrease}>
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
