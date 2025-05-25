import React from "react";
import Score from "./score";
import board from "@/assets/images/board.png";
import Timer from "./timer";

export default function ScoreBoard() {
  return (
    <div className="relative bg-red-100 w-screen h-screen flex items-center justify-center select-none">
      <div className="fixed top-0 left-0 w-full h-full bg-blue-200">
        <img
          src={board}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-10 z-10 bg-black/5 backdrop-blur-2xl text-white p-5 rounded-lg">
          <Score name="Hawks" />
          <Score name="Bulls" isReversed />
        </div>
        <Timer expiryTimestamp={new Date()} />
      </div>
    </div>
  );
}
