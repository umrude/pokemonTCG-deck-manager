import React, { useState } from "react";
import pokemon from "pokemontcgsdk";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={props.img} alt={props.name}></img>
    </div>
  );
}
