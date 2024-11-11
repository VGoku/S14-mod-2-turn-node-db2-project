const db = require("../../data/db-config");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where("id", id).first();
};

const getByVin = (vin) => {
  return db("cars").where("vin", vin).first();
};

const create = (car) => {
  return db("cars")
    .insert(car)
    .returning("id") // Ensure you are using `.returning("id")` in case your DB supports it
    .then(([id]) => {
      return getById(id); // After inserting, retrieve the car by its id
    })
    .catch((err) => {
      // Handle error if insertion fails
      if (err.code === "23505") {  // PostgreSQL unique violation code (for example)
        throw new Error(`VIN ${car.vin} already exists`);
      }
      throw new Error("Error inserting car into the database");
    });
};

module.exports = {
  getAll,
  getById,
  getByVin,
  create,
};
