const mongoose =  require('mongoose')
require('dotenv').config()

db_uri = process.env.DB_URI;
console.log(db_uri)
const connectDb = () => {
    mongoose.connect(db_uri)
    .then(result => {
        console.log('connected to db' + result.connection.host)
    })
    .catch ((err) => {
        console.log(err)
    })
}
module.exports = connectDb;