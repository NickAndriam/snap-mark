import { useActions } from "@/store/actions";
import { useAwayTeamStore } from "@/store/awayTeam";
import { useHomeTeamStore } from "@/store/homeTeam";
import { useTimerStore } from "@/store/timer";
import { Settings2, X } from "lucide-react";
import React from "react";

export default function Settings() {
  const { openSettings, setOpenSettings } = useActions((state) => state);
  const { name: homeName, setName: setHomeName } = useHomeTeamStore(
    (state) => state
  );
  const { name: awayName, setName: setAwayName } = useAwayTeamStore(
    (state) => state
  );
  const { timer, setTimer, shotClock, setShotClock } = useTimerStore(
    (state) => state
  );

  console.log({ homeName, awayName });
  return (
    <div
      style={{
        bottom: openSettings ? "50%" : "-200%",
        transform: openSettings ? "translateY(50%)" : "translateY(0%)",
        transition: "all 0.3s ease",
      }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[80vh] lg:h-auto rounded-2xl bg-[#242626] z-100 p-6 lg:p-8 overflow-scroll"
    >
      <X
        onClick={() => setOpenSettings(false)}
        className="fixed right-4 top-4 pressed z-100"
      />
      <h2 className="flex items-center gap-2 font-bold text-2xl mb-4">
        <Settings2 />
        Settings
      </h2>
      <div className="relative flex flex-col gap-4">
        <div className="flex  items-center justify-start gap-4">
          <InputAndLabel
            name="Home"
            value={homeName}
            onChange={(e) => setHomeName(e.target.value)}
          />
          <InputAndLabel
            name="Away"
            value={awayName}
            onChange={(e) => setAwayName(e.target.value)}
          />
        </div>
        <InputAndLabel
          name="Timer (minutes)"
          type="number"
          value={timer / 60}
          onChange={(e) => setTimer(Number(e.target.value) * 60)}
        />
        <InputAndLabel
          name="Shot Clock (seconds)"
          type="number"
          value={shotClock}
          onChange={(e) => setShotClock(Number(e.target.value))}
        />
        <InputAndLabel
          name="Max Foul"
          value={4}
          //   onChange={(e) => setAwayName(e.target.value)}
        />
      </div>
    </div>
  );
}

const InputAndLabel = ({
  name,
  type = "text",
  value,
  onChange,
}: {
  name: string;
  type?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 items-start justify-start w-full">
      <p className="font-bold opacity-50">{name}</p>
      <input
        type={type}
        value={value}
        name="name"
        onChange={onChange}
        className="w-full bg-black h-12 px-4 text-lg rounded-2xl text-xl"
      />
    </div>
  );
};
