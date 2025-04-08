const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")
const PORT = 8000;
const app = express();

// app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use((req, res, next) => {
    console.log("Hello from Middleware") // it will hold the request and not return anything
    // return res.json({msg: "Hello from Middleware"}) // now every api will return only this message instead of their original data
    // next(); // it will allow api's to work normally

    fs.appendFile("log.txt", `${Date.now()}: ${req.method}: ${req.path}: ${req.ip}\n`, (error, data) => {
        next();
    });

})

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
})
.delete((req, res) => {
    const id = Number(req.params.id)

    // const user = users.find((user) => user.id == id);
    

    let data = users.filter((user) => user.id !== id)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (error) => {
        res.end("Error occured")
    })
    return res.json({msg: `User Deleted Succesfully`, id: id});

})
.patch((req, res) => {
    const id = Number(req.params.id);
    let user = users.find((user) => user.id == id);
    
    user["first_name"] = req.body.first_name || user["first_name"];
    user["last_name"] = req.body.last_name || user["last_name"];
    user["email"] = req.body.email || user["email"];
    user["gender"] = req.body.gender || user["gender"];
    user["job_title"] = req.body.job_title || user["job_title"];

    let data = users.filter((user) => user.id != id);
    data.push(user);

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (error) =>{
        return res.json({error: "Error occured during updation"})
    })

    return res.json({msg: "User data updated successfully", user: user})

})



// REST API
app.get("/api/users", (req, res)=>{
    res.setHeader("X-MyName", "Indrajeet") // Always add X- to custom header is the best practice
    res.send(users);
})

app.post("/api/users", (req, res) => {
    // const {id, first_name, last_name, email, gender, job_title} = req.body;
    const body = req.body;
    console.log("Body: ", body);
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
        return res.json({status: "User Created Successfully", id: users.length})
    })
    
})


app.listen(PORT, (req, res) => {
    console.log("Server started")
})