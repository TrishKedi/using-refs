import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null)
  const playerName = useRef()

  function handleSetName(){
    setEnteredPlayerName(playerName.current.value)

  }

  return (
    <section id="player">
      <h2>Welcome { enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
