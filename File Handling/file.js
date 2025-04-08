const fs = require("fs");
const os = require("os");

// It is a synchronous call
// fs.writeFileSync("test.txt", "This is amazing");

// Asynchronous call
// fs.writeFile("test.txt", "This is amazing async", (error)=> {console.log("Error", error)})

// Reading a file
// it returns the result
// const result = fs.readFileSync("./test.txt", "utf-8")
// console.log(result);


// it do not return the result
// fs.readFile("./test.txt", "utf-8", (error, result)=>{
//     if(error){
//         console.log("Error", error);
//     } else {
//         console.log(result)
//     }
// })

fs.appendFileSync("test.txt", `\n${Date.now()} This is amazing`);

console.log(os.cpus().length)