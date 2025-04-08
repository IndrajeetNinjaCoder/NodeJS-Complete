const mongoose = require("mongoose");

async function connectDB(url) {
    mongoose.connect(url)
    .then(()=> console.log("DB Connected successfully"))
    .catch((error) => console.log("Error connecting DB"))
}

module.exports = {connectDB}