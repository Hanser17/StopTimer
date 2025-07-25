import { useState, useRef } from "react";

export default function Player() {
  console.log("✅ MiComponente montado");
  const playernameRef = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");  
  
  
  function handleClick(){
    setPlayerName(playernameRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName == '' ?  "unknown entity" : playerName}</h2>
      <p>
        <input ref={playernameRef} type="text"  />
        <button  onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
