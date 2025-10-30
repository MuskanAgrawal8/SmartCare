import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Ex. Doctor, Hospital" />
      <input type="text" placeholder="Ex. Surgeon, Cardiologist" />
      <input type="text" placeholder="Set your location" />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBox;
