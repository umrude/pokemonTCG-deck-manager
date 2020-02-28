import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import cardBack from "./imgs/Cardback.jpg";
import axios from "axios";
import Searchbar from "./components/Searchbar";

const pokeCard = {
  id: "xyp-XY05",
  name: "Xerneas",
  nationalPokedexNumber: 716,
  imageUrl: "https://images.pokemontcg.io/xyp/XY05.png",
  imageUrlHiRes: "https://images.pokemontcg.io/xyp/XY05_hires.png"
};

function App() {
  return (
    <div className="App">
      <Searchbar></Searchbar>
    </div>
  );
}

export default App;
