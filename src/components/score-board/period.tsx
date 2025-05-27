import { ChevronLeft, ChevronRight } from "lucide-react";

interface PeriodProps {
  period: number;
  setPeriod?: (newPeriod: number) => void;
}
export default function Period({ period, setPeriod = () => {} }: PeriodProps) {
  return (
    <div className="bg-gray-900 p-2 py-4 space-y-2">
      <div className="flex items-center justify-center text-white">
        <ChevronLeft
          className="text-gray-500 w-8 h-8"
          onClick={() => setPeriod(period === 1 ? 1 : period - 1)}
        />
        <p className="text-yellow-500 digital bg-black text-4xl px-4">
          {period}
        </p>
        <ChevronRight
          className="text-gray-500 w-8 h-8"
          onClick={() => setPeriod(period === 4 ? 4 : period + 1)}
        />
      </div>
      {/* <p className="text-white  text-2xl digital text-center">Period</p> */}
    </div>
  );
}
