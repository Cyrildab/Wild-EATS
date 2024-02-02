const AbstractManager = require("./AbstractManager");

class RestaurantManager extends AbstractManager {
  constructor() {
    super({ table: "restaurant" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async create(restaurant) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (source, restaurant_name, alt, categorie, distance, price, adress, phone, schedules)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        restaurant.source,
        restaurant.restaurant_name,
        restaurant.alt,
        restaurant.categorie,
        restaurant.distance,
        restaurant.price,
        restaurant.adress,
        restaurant.phone,
        restaurant.schedules,
      ]
    );

    return result.insertId;
  }
}

module.exports = RestaurantManager;
