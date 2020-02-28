import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import cardBack from "./imgs/Cardback.jpg";
import axios from "axios";

const pokeCard = {
  id: "xyp-XY05",
  name: "Xerneas",
  nationalPokedexNumber: 716,
  imageUrl: "https://images.pokemontcg.io/xyp/XY05.png",
  imageUrlHiRes: "https://images.pokemontcg.io/xyp/XY05_hires.png"
};

function App() {
  const [img, setImg] = useState(cardBack);
  const [name, setName] = useState(null);

  return (
    <div className="App">
      <Card img={img} name={name}></Card>
    </div>
  );
}

export default App;
