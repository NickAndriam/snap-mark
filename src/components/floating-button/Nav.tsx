import { Folder, Home, Plus, Settings, UserRound } from "lucide-react";
import React from "react";

export default function Nav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full">
      <ul className="flex justify-between items-center bg-white/80 backdrop-blur-lg py-2 px-5 rounded-t-lg ">
        <li>
          <Home />
        </li>
        <li>
          <Folder />
        </li>
        <li className="border-2 border-gray-600 p-2 rounded-full">
          <Plus />
        </li>
        <li>
          <UserRound />
        </li>
        <li>
          <Settings />
        </li>
      </ul>
    </nav>
  );
}
