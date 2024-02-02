const tables = require("../tables");

const showAllRestaurants = async (req, res, next) => {
  try {
    const restaurant = await tables.restaurant.readAll();
    res.json(restaurant);
  } catch (err) {
    next(err);
  }
};

const addRestaurant = async (req, res, next) => {
  const restaurant = req.body;

  try {
    const insertId = await tables.restaurant.create(restaurant);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  showAllRestaurants,
  addRestaurant,
};
