/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-props-no-spreading */
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./PostRestaurant.scss";

function PostRestaurant() {
  // const [imageUrl, setImageUrl] = useState(null);
  const { getValues, handleSubmit, register } = useForm();
  const [isDone, setIsDone] = useState(false);
  // function onImageChange(e) {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const objectUrl = URL.createObjectURL(file);
  //     setImageUrl(objectUrl);
  //   }
  // }
  const onSubmit = async () => {
    const values = getValues();
    values.source = "assets/images/random.jpg";
    setIsDone(true);

    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/restaurant`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      cache: "default",
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isDone) {
      setTimeout(() => {
        navigate("/");
      }, 5000);
    }
  }, [isDone]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="restaurantForm">
      <h1 className="titlePost">Ajouter un restaurant</h1>

      {/* <input
        type="file"
        id="photo"
        name="photo"
        accept=".jpeg,.png"
        onChange={onImageChange}
        className="addImage"
      />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Selected artwork"
          className="selectedArtwork"
        />
      )} */}

      <input
        type="text"
        className="imputPost"
        placeholder="Nom"
        {...register("restaurant_name")}
      />

      <input
        className="imputPost"
        type="text"
        placeholder="Description"
        {...register("alt")}
      />

      <div className="selectFilter">
        <select {...register("categorie")} id="categorie" className="imputPost">
          <option value="Burger">Burger</option>
          <option value="Japonais">Japonais</option>
          <option value="Chinois">Chinois</option>
          <option value="Français">Français</option>
          <option value="Mexicain">Mexicain</option>
          <option value="Italien">Italien</option>
        </select>
      </div>

      <input
        className="imputPost"
        type="text"
        placeholder="Distance"
        {...register("distance")}
      />

      <div className="selectFilter">
        <select {...register("price")} id="price" className="imputPost">
          <option value="€">€</option>
          <option value="€€">€€</option>
          <option value="€€€">€€€</option>
          <option value="€€€€">€€€€</option>
        </select>
      </div>

      <input
        placeholder="Adresse"
        type="text"
        className="imputPost"
        {...register("adress")}
      />
      <input
        type="text"
        className="imputPost"
        placeholder="Téléphone"
        {...register("phone")}
      />
      <input
        type="text"
        className="imputPost"
        placeholder="Horaires"
        {...register("schedules")}
      />

      <input
        type="submit"
        value="Valider"
        className="validateButton"
        onSubmit={onSubmit}
      />
      {isDone && (
        <p className="thanksPost">
          Merci ! Vous allez être redirigé(e) sur la page d'accueil !
        </p>
      )}
    </form>
  );
}

export default PostRestaurant;
