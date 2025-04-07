const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")
const PORT = 8000;
const app = express();

// app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get("/users", (req, res) => {
    const html = `
        <ol>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}            
        </ol>`

        res.send(html);
})


// Routing

app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id == id);
    return res.json(user);  // return res.json(data) is equal to res.send(data)
}).post((req, res) => {
    res.send("Status Pending")

}).patch((req, res) => {
    res.send("Status Panding")
})



// REST API
app.get("/api/users", (req, res)=>{
    res.send(users);
})

app.post("/api/users", (req, res) => {
    // const {id, first_name, last_name, email, gender, job_title} = req.body;
    const body = req.body;
    console.log("Body: ", body);
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
        return res.json({status: "Pending", id: users.length})
    })
    
})


app.listen(PORT, (req, res) => {
    console.log("Server started")
})