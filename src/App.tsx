import "./App.css";
import RotateScreen from "./components/score-board/rotate-screen";
import ScoreBoard from "./components/score-board/score-board";
import Settings from "./components/score-board/settings/settings";

// bg-[#232525]

function App() {
  return (
    <>
      <RotateScreen />
      <div className="relative hidden sm:grid md:grid lg:grid bg-black w-screen h- overflow-hidden text-white select-none">
        <ScoreBoard />
        <Settings />
      </div>
    </>
  );
}

export default App;
