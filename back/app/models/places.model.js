const mongoose = require("mongoose");

const Place = mongoose.model(
  "Place",
  new mongoose.Schema({
    place: String,
    article: String,
    images: Object,
  }), "Places"
);

module.exports = Place;
