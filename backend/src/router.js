const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const restaurantControllers = require("./controllers/restaurantControllers");
// const uploadImage = require("./middlewares/uploadImage");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/restaurant", restaurantControllers.showAllRestaurants);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);
router.post("/restaurant", restaurantControllers.addRestaurant);

/* ************************************************************************* */

module.exports = router;
