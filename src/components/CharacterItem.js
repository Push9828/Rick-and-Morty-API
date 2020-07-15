import React from "react";

const CharacterItem = ({ character }) => {
  return (
    <div className="wrapper">
      <div className="character-img">
        <img src={character.image} alt="" />
      </div>

      <div className="character-content">
        <div className="section">
          <h2> {character.name}</h2>
          <span className="status">
            <span className="status-icon"></span>
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
