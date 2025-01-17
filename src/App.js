// App.js
import React, { useState } from "react";
import "./App.css";
import PokemonVote from "./components/PokemonVote";
import UserInput from "./components/UserInput";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
  };

  return (
    <div className="App">
      <Header />
      <div className="UserInput" data-testid="user-input">
        <UserInput onSubmit={handleNameSubmit} />
      </div>
      <div className="PokemonVote" data-testid="pokemon-vote">
        <PokemonVote name={name} />
      </div>
      <Footer data-testid="footer" />
    </div>
  );
}

export default App;
