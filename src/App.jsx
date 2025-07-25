import Player from "./components/Player";
import TimerChanllenge from "./components/TimerChanllenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChanllenge title="Easy" targettime={1} />
      <TimerChanllenge title="No Easy" targettime={5} />
      <TimerChanllenge title="Getting tough" targettime={10} />
      <TimerChanllenge title="Hard" targettime={15} />
      </div>
      
    </>
  );
}

export default App;
