import React from "react";
import cards from "./cards";
import Pokedex from "./Pokedex";

function App() {
  return (
    <div className="App">
      <div>
        <Pokedex cards={cards} />
      </div>
    </div>
  );
}

export default App;
