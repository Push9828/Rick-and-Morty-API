import React, { useState } from "react";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="containter">
      <Header />
      <CharacterGrid isLoading={isLoading} characters={characters} />
      <Pagination setCharacters={setCharacters} setIsLoading={setIsLoading} />
    </div>
  );
};

export default App;
