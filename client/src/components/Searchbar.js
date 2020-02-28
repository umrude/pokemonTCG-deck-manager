import React, { useState } from "react";
// import SearchField from "react-search-field";
import axios from "axios";

export default function Searchbar(props) {
  const [value, setValue] = useState("");

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function onSearchClick(event) {
    event.stopPropagation();
    event.preventDefault();
    setValue(event.target.value);
    axios.get(`/search?query=${value}`).then(res => {
      console.log(res.data);
    });
    setValue("");
  }

  return (
    <form onSubmit={onSearchClick}>
      <input type="search" id="search" placeholder="Search..." onChange={handleInputChange} value={value} />
      <button>Go</button>
    </form>
  );
}
