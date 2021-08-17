import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ cards }) => {
  return (
    <div>
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <div>
          {cards.map((c) => (
            <Pokecard
              id={c.id}
              name={c.name}
              type={c.type}
              exp={c.base_experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
