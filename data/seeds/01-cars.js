// STRETCH
const cars = [
    {
    vin: "3D7LX39C36G133479",
    make: "toyota",
    model: "prius",
    mileage: 215000,
    title: "clean",
    transmission: "manual",
    },
    {
    vin: "1D7HU18237S221020",
    make: "toyota",
    model: "corolla",
    mileage: 115000,
    title: "salvage",
    },
    {
    vin: "YV1VW29522F858711",
    make: "ford",
    model: "focus",
    mileage: 15000,
    },
]

// exports.seed = function(knex) {
// return knex("cars")
// .truncate().then(() => {
// return knex("cars").insert(cars);
// })
// }

exports.seed = async function (knex) {
    await knex("cars").truncate()
    await knex("cars").insert(cars)
}