const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URI;
const dbName = "travelKenya";
const collectionName = "Places";

async function findSpecificPlaceById(placeId) {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    console.log('trying')
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Convert the string ID to a MongoDB ObjectId
    const objectId = new ObjectId(placeId);

    const place = await collection.findOne({ _id: objectId });

    return place;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

module.exports = findSpecificPlaceById;
