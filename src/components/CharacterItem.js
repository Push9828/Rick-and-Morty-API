import React from "react";

const CharacterItem = ({ character }) => {
  const classAlive = {
    background: "green",
  };

  const classDead = {
    background: "red",
  };

  const classUnknown = {
    background: "grey",
  };

  let className = null;

  if (character.status === "Alive") {
    className = classAlive;
  } else if (character.status === "Dead") {
    className = classDead;
  } else if (character.status === "unknown") {
    className = classUnknown;
  }

  return (
    <div className="wrapper">
      <div className="character-img">
        <img src={character.image} alt="" />
      </div>

      <div className="character-content">
        <div className="section">
          <h2> {character.name}</h2>
          <span className="status">
            <span className="status-icon" style={className}></span>
            {character.status} - {character.species}
          </span>

          <div className="section">
            <span className="text-grey"> Last known location: </span>
            <p>{character.location.name}</p>
          </div>

          <div className="section">
            <span className="text-grey"> Origin: </span>
            <p>{character.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
