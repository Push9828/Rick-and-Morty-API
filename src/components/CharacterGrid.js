import React from "react";
import Spinner from "./Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="flexContainer">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
