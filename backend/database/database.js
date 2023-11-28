#!/usr/bin/node
// this is a script that is used to connect the MongoDB database

const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const path = require("path");

// connection the MongoDB URI
const uri =
  "mongodb+srv://kal_mongo:kal_mongo@cluster0.c83oh3l.mongodb.net/kal_db?retryWrites=true&w=majority";

// database name and collectionName
const collectionName = "Places";

// JSON file being read
const filePath = path.join(__dirname, "../data/data.json");
const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

// connect to MongoDB
async function connectToMongoDB() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to the Database");

    // Get reference to the database
    const database = client.db();

    // Drop the existing collection
    await database
      .collection(collectionName)
      .drop()
      .catch((err) => {
        // Ignore error if the collection doesn't exist
        if (err.code !== 26) {
          throw err;
        }
      });
    console.log(`Collection ${collectionName} dropped`);

    // Create the collection
    await database.createCollection(collectionName);
    console.log(`Collection ${collectionName} created`);

    // Insert data into the collection
    const collection = database.collection(collectionName);
    await collection.insertMany(jsonData);
    console.log("Data inserted into the collection");
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}
connectToMongoDB();
