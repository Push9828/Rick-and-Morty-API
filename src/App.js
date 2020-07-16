import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character`);

      console.log(result.data.results);

      setCharacters(result.data.results);
      setIsLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <div className="containter">
      <Header />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  );
};

export default App;
