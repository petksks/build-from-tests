import React, { useState } from "react";
import "./App.css";
// import PokemonVote from "./Components/Pokemons";
import PokemonVote from "./components/PokemonVote";
import UserInput from "./Components/UserInput";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [name, setName] = useState("");

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
  };
  
  console.log("app.js name: ", name)
  
  return (
    <div className="App">
      <Header />
      <UserInput onSubmit={handleNameSubmit} />
      <PokemonVote name={name} />
      <Footer/>
    </div>
  );
}

export default App;