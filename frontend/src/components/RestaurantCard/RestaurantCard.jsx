/* eslint-disable camelcase */
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactCardFlip from "react-card-flip";
import { PropTypes } from "prop-types";
import { useState } from "react";
import "./RestaurantCard.scss";

function RestaurantCard({
  source,
  restaurant_name,
  alt,
  categorie,
  distance,
  price,
  adress,
  phone,
  schedules,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
      flipDirection="horizontal"
    >
      <article className="front">
        <img
          className="imageRestaurant"
          src={`${import.meta.env.VITE_BACKEND_URL}/${source}`}
          alt={`${restaurant_name}`}
        />
        <h1 className="titleRestaurant">{restaurant_name}</h1>
        <p className="descriptionRestaurant">{alt}</p>
        <p className="categorieRestaurant">{categorie}</p>
        <ul className="listeRestaurant">
          <li>{distance}</li>
          <li>{price}</li>
        </ul>
        <button className="flipButton" type="button" onClick={handleClick}>
          Voir plus →
        </button>
      </article>
      <div className="back">
        <img
          className="imageRestaurant"
          src={`${import.meta.env.VITE_BACKEND_URL}/${source}`}
          alt={`${restaurant_name}`}
        />
        <p className="descriptionRestaurant">{adress}</p>
        <p className="descriptionRestaurant">{phone}</p>
        <p className="descriptionRestaurant">{schedules}</p>
        <button className="flipButton" type="button" onClick={handleClick}>
          Retour →
        </button>
      </div>
    </ReactCardFlip>
  );
}

RestaurantCard.propTypes = {
  source: PropTypes.string.isRequired,
  restaurant_name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  schedules: PropTypes.string.isRequired,
};

export default RestaurantCard;
