const mongoose = require("mongoose");

const Contactus = mongoose.model(
  "contactus",
  new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    need: String,
    message: String
  }),
  "Contactus"
);

module.exports = Contactus;
