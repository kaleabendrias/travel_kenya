#!/usr/bin/node
// this is a script that is used to connect the mongodb database
require("dotenv").config();

const MongoClient = require('mongodb').MongoClient;

// connection the mongodb URI
const uri = process.env.DB_URI;

// database name and collectionName
const dbName = 'travelKenya';
const collectionName = 'Places';

// connect to mongodb
async function findSpecificPlace (placeName) {
  const client = new MongoClient(uri, {useUnifiedTopology: true});
  let place;
  try {
    await client.connect();

    // Get refference to the database
    const database = client.db(dbName);

    const collection = await database.collection(collectionName);

    place = await collection.findOne({ place: { $regex: new RegExp(placeName, 'i') } });
    if (place) {
    } else {
      await client.close();
      return (null);
    }
  } finally {
    await client.close();
  }
  return (place);
}
module.exports = findSpecificPlace;
