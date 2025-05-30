import { useTimerStore } from "@/store/timer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Period() {
  const { period, setPeriod } = useTimerStore((state) => state);
  return (
    <div className="bg-gray-900 p-2 py-4 space-y-2">
      <div className="flex items-center justify-center text-white">
        <ChevronLeft
          className="text-gray-500 w-8 h-8 lg:w-10 lg:h-10 pressed"
          onClick={() => setPeriod(period === 1 ? 1 : period - 1)}
        />
        <p className="text-yellow-500 digital bg-black text-4xl lg:text-6xl px-4">
          {period}
        </p>
        <ChevronRight
          className="text-gray-500 w-8 h-8 pressed"
          onClick={() => setPeriod(period === 4 ? 4 : period + 1)}
        />
      </div>
    </div>
  );
}
