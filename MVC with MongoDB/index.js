const express = require("express")
const mongoose = require("mongoose");
const User = require("./models/user");
const userRouter = require("./routes/user")
const {connectDB} = require("./connection")
const {logReqRes} = require("./middlewares") // no need to define /index after middlewares because index is there bydefault

const PORT = 8000;
const app = express();

// connection to Database
connectDB("mongodb+srv://Indrajeet:Indrajeet@crudapi.xhdof.mongodb.net/?retryWrites=true&w=majority&appName=CRUDAPI");

// middlewares
app.use(express.json())
app.use(logReqRes("log.txt"))


// Registering Router
app.use("/api/users", userRouter)

app.listen(PORT, (req, res) => {
    console.log(`Server started at http://localhost:${PORT}`);
})