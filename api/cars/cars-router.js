// DO YOUR MAGIC
const express = require("express");
const Car = require("./cars-model");
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
} = require("./cars-middleware")

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", checkCarId, async (req, res, next) => {
    res.json(req.car)
    // res.json(`getting car with id ${req.params.id}`)
    // next()
    // try {
    //     const car = await Car.getById(req.params.id)
    //     res.json(car)
    // } catch (err) {
    //     next(err)
    // }

})

router.post(
    "/",
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
     async (req, res, next) => {
        try {
            const car = await Car.create(req.body)
            res.json(car)
        } catch (err) {
            next(err)
        }
    // res.json("posting new car")
    // next()
})

module.exports = router;