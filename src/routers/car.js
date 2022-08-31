const express = require("express");
const Car = require("../models/car");
const Auth = require("../middleware/auth");

const router = new express.Router();
//get Cars 

router.get("/car", Auth, async (req, res) => {
  const owner = req.user._id;
  try {
    const car = await Car.find({ owner }).populate('owner', owner).populate('category');
    if (car && car.length > 0) {
      res.status(200).json(car);
    } else {
      res.status(200).json('No Car found!');
    }
  } catch (error) {
    res.status(500).json();
  }
});

// insert cars

router.post('/addcar', Auth, async(req, res) => {
  try {
      const car = await new Car({
          ...req.body,
          owner: req.user._id
      })
      await car.save()
      res.status(201).send(car)
  } catch (error) {
      console.log({error})
      res.status(400).send({message: "error"})
  }
})








module.exports = router;
