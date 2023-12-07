const config = require("../config/auth.config");
const db = require("../models");
const nodemailer = require("nodemailer");
require('dotenv').config();
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const emailValidator = require("email-validator");

exports.signup = async (req, res) => {
   console.log('Received signup request:', req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required!" });
    }

    if (!emailValidator.validate(email)) {
      return res.status(400).send({ message: "Invalid Email address!" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .send({ message: "Password must be at least 6 characters long!" });
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

    // sending verification to their email
    const verificationToken = jwt.sign({ email: user.email }, "verify_secret", {
      expiresIn: "1d",
    });

    user.roles = [defaultRole._id];
    user.verified = false; // You may want to set verified to false initially
    user.verificationToken = verificationToken;

    console.log("username:" + process.env.EMAIL);
    console.log("password" + process.env.PASSWORD);

    const verificationUrl = `https://travel-kenya-back.vercel.app/verify?token=${verificationToken}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: "Verify your email",
      text: `Please click this link to verify your email: ${verificationUrl}`,
    };
    try {
        transporter.sendMail(mailOptions);
    } catch (err) {
      console.log(err);
    }
    console.log("email sent");


    await user.save();

    res.send({ message: "User was registered successfully!" });
  } catch (err) {
    console.error(err);
    console.log('something')
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

    if (!user.verified) {
      return res.status(404).send({ message: "Email Not Verified!." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid Password!" });
    }

    const authorities = user.roles.map((role) => "ROLE_" + role.name.toUpperCase());

    const token = jwt.sign(
      { id: user.id },
      process.env.SECRET_KEY,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: '6h',
      }
    );
    console.log(token)
    res.cookie('session', token);

    res.status(200).send({
      id: user._id,
      email: user.email, // Assuming email is the identifier
      password: user.password,
      roles: authorities,
      token: token,
      
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    res.clearCookies('session')
    return res.status(200).send({ message: "You've been signed out!" });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

// Import necessary modules

exports.verifyTokenEmail = (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).send({ message: "Verification token is missing." });
  }

  jwt.verify(token, "verify_secret", async (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid or expired verification token." });
    }

    const { email } = decoded;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

      // Update user's verification status to true
      user.verified = true;
      await user.save();

      return res.redirect("https://travel-kenya-mauve.vercel.app/signin");
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal Server Error" });
    }
  });
};

