const { authJwt } = require("../middlewares");
const controller = require("../controllers/place.controller");
const express = require('express')
const router = express.Router();
const Place = require('../models/places.model.js')


router.get('/allPlaces', async (req, res)=>{
  try {
    let places = await Place.find();
    if (!places)  {
        res.status(404).send("error");
    }
    res.send(places)
  }
  catch (err) {
    console.log(err)
    res.status(500).send("error")

  }
})

router.get("/place/:id", async(req, res) => {
  try {
    let place = await Place.findOne({_id: req.params.id})
    if (!place) {
        res.status(404).send("couldnt fetch places")
    }
    res.send(place)
  }
  catch (err) {
    console.log(err)
    return res.status(500).send('error')
  }
})


router.get("/places/:id", async (req, res) => {
  const searchValue = req.params.id.trim(); // Remove leading and trailing spaces
  const query = { place: { $regex: new RegExp(searchValue, "i") } };

  try {
    const place = await Place.find(query).collation({ locale: "en" });

    if (place.length === 0) {
      res.status(404).send("Place not found");
    } else {
      res.send(place);
    }
  } catch (error) {
    console.error("Error fetching place:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;