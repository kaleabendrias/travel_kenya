const Contactus = require("../models/contactus.models")

exports.contactus = async (req, res) => {
  console.log("Received contactus request:", req.body);
  try {const {firstName, lastName, email, need, message} = req.body;

  if (!need || !message) {
    return res
      .status(400)
      .send({ message: "Email and password are required!" });
  }
  const contactus = new Contactus({
    firstName,
    lastName,
    email,
    need,
    message
  });
  await contactus.save()
  res.send({ message: "User was registered successfully!" });
}
catch (err) {
    console.error(err);
    console.log("something");
    res.status(500).send({ message: "Internal Server Error" });
}

};
