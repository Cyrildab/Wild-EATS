/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    queries.push(
      await database.query(
        `INSERT INTO restaurant (source, restaurant_name, alt, categorie, distance, price, adress, phone, schedules)
        VALUES("/assets/images/burger1.png", "Burger Mania", "L'endroit ultime pour les amateurs de burgers, avec une variété de créations allant des classiques aux innovations gastronomiques. ", "Burger", "250m", "€€€", "125 avenue de Bretagne, Lille 59160", 0675432156, "12h-14 / 18h30-23h"),
        ("/assets/images/japanese1.jpg", "Tokyo Sushi", "Une expérience japonaise authentique avec des sushis délicieux et une ambiance traditionnelle.", "Japonais", "280m", "€€", "58 Rue de Tokyo, Lille 59110", 0679345678, "12h-14h30 / 18h-22h"), ("/assets/images/chinese3.jpg", "Great Wall Restaurant", "Une variété de plats chinois savoureux dans un cadre élégant au cœur de la ville.", "Chinois", "320m", "€€", "75 Rue de la Grande Muraille, Lille 59111", 0679456789, "11h30-14h / 18h-23h"), ("/assets/images/french1.jpg", "Le Petit Bistro", "Une cuisine française classique servie dans une atmosphère chaleureuse et conviviale.", "Français", "350m", "€€", "82 Rue de la France, Lille 59112", 0679567890, "12h-15h / 19h-23h"), ("/assets/images/mexican1.jpg", "El Mariachi", "Une fête de saveurs mexicaines avec des plats épicés, des tacos et des margaritas.", "Mexicain", "300m", "€€", "93 Avenida de la Fiesta, Lille 59113", 0679678901, "11h-14h30 / 18h-22h"), ("/assets/images/italian1.jpg", "Bella Italia", "Une expérience italienne authentique avec des pâtes fraîches et des pizzas délicieuses.", "Italien", "400m", "€€", "105 Via Italia, Lille 59114", 0679789012, "12h-15h / 19h-23h"), ("/assets/images/japanese2.jpg", "Sushi Zen", "Un voyage culinaire au Japon avec des sushis artistiquement présentés et des plats délicats.", "Japonais", "330m", "€€", "70 Zen Street, Lille 59115", 0679890123, "11h30-14h / 18h-22h"), ("/assets/images/chinese1.jpg", "Golden Garden", "Une oasis de saveurs chinoises dans un cadre paisible avec un jardin exotique.", "Chinois", "280m", "€€", "45 Garden Lane, Lille 59116", 0679901234, "12h-15h / 19h-23h"), ("/assets/images/french2.jpg", "La Brasserie Charmante", "Une brasserie française charmante proposant des plats classiques et des vins fins.", "Français", "360m", "€€€", "60 Rue Charmante, Lille 59117", 0679012345, "11h-14h30 / 18h-22h"), ("/assets/images/mexican2.jpg", "Picante Grill", "Des plats mexicains épicés et authentiques dans une ambiance vibrante et colorée.", "Mexicain", "310m", "€€", "75 Calle Picante, Lille 59118", 0679123456, "12h-15h / 19h-23h"), ("/assets/images/italian2.jpg", "Passione Italiana", "Une passion pour la cuisine italienne avec des plats riches en saveurs et en tradition.", "Italien", "420m", "€€", "95 Piazza della Passione, Lille 59119", 0679234567, "11h30-14h / 18h-22h")`
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
