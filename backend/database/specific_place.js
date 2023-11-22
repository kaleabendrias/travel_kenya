#!/usr/bin/node
// this is a script that is used to connect the mongodb database

const MongoClient = require('mongodb').MongoClient;

// connection the mongodb URI
const uri = 'mongodb://localhost:33017';

// database name and collectionName
const dbName = 'travelKenya';
const collectionName = 'Places';

// connect to mongodb
async function findSpecificPlace (placeName) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the Database');

    // Get refference to the database
    const database = client.db(dbName);

    const collection = await database.collection(collectionName);

    const place = await collection.findOne({ place: { $regex: new RegExp(placeName, 'i') } });
    if (place) {
      console.log('Place found:', place);
    } else {
      console.log('Place not found');
    }
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
module.exports = FindSpecificPlace;
