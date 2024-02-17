import "./App.css";
import CountDown from "./components/CountDown";
import DailyQuote from "./components/DailyQuote";
import Loglib from "@loglib/tracker/react";

function App() {
  return (
    <div className="App">
      <Loglib
        config={{
          id: "ramadan-countdown",
        }}
      />
      <CountDown />
      <DailyQuote />
    </div>
  );
}

export default App;
