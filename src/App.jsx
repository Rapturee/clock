import Clock from "./Clock.jsx";
import Timer from "./Timer.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Clock city={"Stockholm"} timeZone={"Europe/Stockholm"} />
      <div className="timerContainer">
        <Timer startTime={999} />
        <Timer startTime={999} />
        <Timer startTime={999} />
      </div>
    </div>
  );
}

export default App;
