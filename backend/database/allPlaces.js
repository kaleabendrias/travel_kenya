#!/usr/bin/node
// receives all places in a list a place will be a dict

// this is use to import the MongoClient from mongodb lib
const MongoClient = require('mongodb').MongoClient;

// the uri used to connect to the database
const uri = 'mongodb://localhost:33017';

// the database name and the collection name
const dbName = 'travelKenya';
const collectionName = 'Places';

// function used to getAllPlaces
async function getAllPlaces () {
  // create a new client
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  let places;

  try {
    // await for the client authentication
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    places = await collection.find().toArray();

    if (places.length > 0) {
    } else {
      return (null);
    }
  } finally {
    await client.close();
    return (places);
  }
}
module.exports = getAllPlaces;
