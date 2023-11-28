const express = require("express");
const router = express.Router();
const controller = require("../controllers/contactus.controller");

router.post("/api/contactus", controller.contactus);

module.exports = router;
