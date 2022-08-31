const express = require("express");
const category = require("../models/category");
const Auth = require("../middleware/auth");

const router = new express.Router();
//get category 

router.get("/category", async (req, res) => {
  try {
    const cat = await category.find();
    if (cat && cat.length > 0) {
      res.status(200).json(cat);
    } else {
      res.status(200).json('No Car found!');
    }
  } catch (error) {
    res.status(500).json();
  }
});

// insert category

router.post('/addcategory',  async(req, res) => {
  try {
      const cat = await new category({
          ...req.body
      })
      await cat.save()
      res.status(201).send(cat)
  } catch (error) {
      console.log({error})
      res.status(400).send({message: "error"})
  }
})








module.exports = router;
