#!/usr/bin/node
// this is a script that is used to connect the mongodb database

const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');

// connection the mongodb URI
const uri = 'mongodb://localhost:33017';

// database name and collectionName
const dbName = 'travelKenya';
const collectionName = 'Places';

// JSON file being read
const jsonData = JSON.parse(fs.readFileSync('../data/data.json', 'utf8'));

// connect to mongodb
async function connectToMongoDB () {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to the Database');

    // Get reference to the database
    const database = client.db(dbName);

    // Drop the existing collection
    await database.collection(collectionName).drop().catch(err => {
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
    console.log('Data inserted into the collection');
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
connectToMongoDB();
