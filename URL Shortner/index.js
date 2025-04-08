const express = require("express");
const urlRoute = require("./routes/url")
const {connectDB} = require("./connection")
const app = express();
app.use(express.json())
const PORT = 8000;

connectDB("mongodb+srv://Indrajeet:Indrajeet@crudapi.xhdof.mongodb.net/?retryWrites=true&w=majority&appName=CRUDAPI")

app.use("/url", urlRoute);

app.listen(PORT, ()=> console.log(`Serer started at http://localhost:${PORT}`))