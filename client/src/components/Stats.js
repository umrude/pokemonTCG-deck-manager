import React, { useState } from "react";

export default function Stats(props) {
  return (
    <div className="Stats">
      <h1 className="pokeName">{props.name}</h1>
      <h2>
        {props.supertype}-{props.subtype}
      </h2>
      <p>HP: {props.hp}</p>
    </div>
  );
}
