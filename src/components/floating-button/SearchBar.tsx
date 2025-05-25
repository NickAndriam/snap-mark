import Input from "./ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="fixed top-0 w-[92%] left-1/2 -translate-x-1/2 z-100 px-4 flex justify-between items-center bg-white border rounded-full my-4">
      <Input />
      <Search />
    </div>
  );
}
