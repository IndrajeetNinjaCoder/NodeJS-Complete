const mongoose = require("mongoose")

function connectDB(url) {
    mongoose.connect(url)
.then(() => console.log("DB Connected successfully"))
.catch((error) => console.log("Error connecting DB ", error))

}

module.exports = {connectDB};