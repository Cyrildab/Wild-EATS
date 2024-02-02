/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import "./SearchBar.scss";

function SearchBar({ allRestaurants, setFilteredRestaurants }) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filteredRestaurants = allRestaurants.filter((e) =>
      e.restaurant_name.toLowerCase().startsWith(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredRestaurants);
  }, [searchText, allRestaurants, setFilteredRestaurants]);

  return (
    <section className="searchBarContainer">
      <input
        className="search"
        type="text"
        placeholder="Rechercher"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </section>
  );
}

export default SearchBar;
