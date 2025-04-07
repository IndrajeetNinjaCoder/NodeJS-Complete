const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request received\n`;

    const myUrl = url.parse(req.url, true)
    console.log(myUrl)

    fs.appendFile("log.txt", log, (error) =>{
        res.end("Hello from server")
    })    
})

myServer.listen(8000, ()=> console.log("Server started"))