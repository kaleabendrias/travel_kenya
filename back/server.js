const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const cors = require("cors");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const auth = require("./app/routes/auth.routes");
const cookieParser = require("cookie-parser");
const placeRoutes = require("./app/routes/place.routes");
const contactusRoutes = require("./app/routes/contactus.routes");
require("dotenv").config();
// const connectDb = require("./app/config/db.config");

const app = express();

app.use(cors()); // enable cors

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// parse requests of json
app.use(express.json());

app.use(cookieParser());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
    keys: process.env.SECRET_KEY.split(","), // Split the string into an array of keys
    httpOnly: false, // key sent only in https
  })
);

// Configure session middleware
app.use(
  session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    httpOnly: false,
  })
);

// Configure Passport.js middleware
app.use(passport.initialize());
app.use(passport.session());

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // This function is called when the user is successfully authenticated
      // You can save the user in the database here or perform any other actions
      return done(null, profile);
    }
  )
);


// Serialize user object to store in session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user object from session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const authRoutes = require("./app/routes/auth.routes");



const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
const { contactus } = require("./app/controllers/contactus.controller");
const Role = db.role;

const dbUri = process.env.DB_URI;

db.mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// routes
authRoutes(app);
require("./app/routes/user.routes")(app);
app.use("/", placeRoutes);
app.use("/", contactusRoutes);
// app.use('/', auth);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count === 0) {
      await new Role({
        name: "user",
      }).save();

      console.log("added 'user' to roles collection");

      await new Role({
        name: "moderator",
      }).save();

      console.log("added 'moderator' to roles collection");

      await new Role({
        name: "admin",
      }).save();

      console.log("added 'admin' to roles collection");
    }
  } catch (err) {
    console.error("Error during initialization:", err);
  }
}
