import { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/Filter";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import "./HomePage.scss";

function HomePage() {
  const categories = [
    {
      id: 1,
      name: "Tous",
    },
    {
      id: 2,
      name: "Japonais",
    },
    {
      id: 3,
      name: "Burger",
    },
    {
      id: 4,
      name: "Français",
    },
    {
      id: 5,
      name: "Mexicain",
    },
    {
      id: 6,
      name: "Chinois",
    },
    {
      id: 7,
      name: "Italien",
    },
  ];

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/restaurant`)
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        setFilteredRestaurants(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <NavBar />
      <SearchBar
        allRestaurants={restaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <section className="buttonFilter">
        {categories.map((e) => (
          <Filter
            key={e.id}
            name={e.name}
            setSelectedRestaurants={setRestaurants}
          />
        ))}
      </section>
      <article className="cardRestaurantAll">
        {filteredRestaurants.map((e) => (
          <RestaurantCard
            key={e.restaurant_name}
            restaurant_name={e.restaurant_name}
            source={e.source}
            alt={e.alt}
            categorie={e.categorie}
            distance={e.distance}
            price={e.price}
            adress={e.adress}
            phone={e.phone}
            schedules={e.schedules}
          />
        ))}
      </article>
      <Footer />
    </>
  );
}

export default HomePage;
