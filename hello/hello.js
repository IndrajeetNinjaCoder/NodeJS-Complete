// const math = require("./math")
const {add, sub} = require("./math")    // {add, sub} -> destructuring

console.log("This is the starting of Node.js")

// console.log("Function: ", math.add(4, 5), math.sub(5, 3))
console.log("Function: ", add(4, 5), sub(5, 3))
