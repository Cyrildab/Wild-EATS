/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import "./Filter.scss";

function Filter(categories) {
  const { name, setSelectedRestaurants } = categories;

  const [restaurant, setRestaurant] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/restaurant`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurant(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = () => {
    if (name !== "Tous") {
      const selection = restaurant.filter((e) => e.categorie === name);
      setSelectedRestaurants(selection);
    } else {
      setSelectedRestaurants(restaurant);
    }
  };

  return (
    <button type="button" className="filter" onClick={handleClick}>
      {name}
    </button>
  );
}

export default Filter;
