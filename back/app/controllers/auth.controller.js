const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
   console.log('Received signup request:', req.body);
  try {
    const { email, password } = req.body;

     if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required!" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email is already in use!" });
    }

    // Create a new user
    const user = new User({
      email,
      password: bcrypt.hashSync(password, 8),
    });

    // Assign the default role (e.g., "user")
    const defaultRole = await Role.findOne({ name: "user" });
    if (!defaultRole) {
      return res.status(500).send({ message: "Default role not found!" });
    }

    user.roles = [defaultRole._id];
    await user.save();

    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.signin = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required!" });
    }

    const user = await User.findOne({ email }).populate("roles", "-__v");

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const token = jwt.sign(
      { id: user.id },
      config.secret,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      }
    );

    const authorities = user.roles.map((role) => "ROLE_" + role.name.toUpperCase());

    req.session.token = token;

    res.status(200).send({
      id: user._id,
      email: user.email, // Assuming email is the identifier
      roles: authorities,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
