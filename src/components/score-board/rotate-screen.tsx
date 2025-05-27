import board from "/images/board.png";
import { RotateCcw } from "lucide-react";

export default function RotateScreen() {
  return (
    <div className="relative grid sm:hidden md:hidden lg:hidden w-screen h-screen items-center justify-center bg-black text-white text-2xl font-bold">
      <div className="fixed top-0 left-0 w-full h-full ">
        <img
          src={board}
          alt="Background"
          className="object-cover w-full h-full blur-sm"
        />
      </div>
      <div className="z-100 flex items-center justify-center flex-col gap-4 animate-pulse">
        <p>Rotate Your Screen</p>
        <RotateCcw className="animate-spin" />
      </div>
    </div>
  );
}
