const express = require('express')
const cors = require("cors");
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const auth = require('./app/routes/auth.routes')
const cookieParser = require('cookie-parser');
const placeRoutes = require("./app/routes/place.routes");
const contactusRoutes = require("./app/routes/contactus.routes")
require('dotenv').config();
const connectDb = require('./app/config/db.config')

const app = express();


// var corsOptions = {
//     origin: "https://localhost:5117"
// }

app.use(cors()) // enable cors

app.use(bodyParser.urlencoded({ extended: true })); // Add this line
app.use(bodyParser.json()); // Add this line


// parse requests of json
app.use(express.json());

app.use(cookieParser());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.use(
  cookieSession({
    name: "session",
    keys: process.env.SECRET_KEY.split(','), // Split the string into an array of keys
    httpOnly: true, // key sent only in https
  })
);



const db = require("./app/models");
const dbConfig = require('./app/config/db.config');
const { contactus } = require('./app/controllers/contactus.controller');
const Role = db.role;



const dbUri = process.env.DB_URI;

db.mongoose
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


// routes

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
app.use('/', placeRoutes);
app.use('/', contactusRoutes);
// app.use('/', auth);
app.get('/', (req, res) => {
    res.json({message: "Welcome to the server"})
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})



async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count === 0) {
      await new Role({
        name: "user"
      }).save();

      console.log("added 'user' to roles collection");

      await new Role({
        name: "moderator"
      }).save();

      console.log("added 'moderator' to roles collection");

      await new Role({
        name: "admin"
      }).save();

      console.log("added 'admin' to roles collection");
    }
  } catch (err) {
    console.error("Error during initialization:", err);
  }
}
