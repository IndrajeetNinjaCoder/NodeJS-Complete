const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
})

app.get("/about", (req, res) => {
    res.send("About Page: name = " + req.query.name)
})


app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})