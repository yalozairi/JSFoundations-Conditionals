// Define the numbers and the operation here
let num1 = Math.floor(Math.random() * 10)
let num2 = Math.floor(Math.random() * 10)
const operations = ["+", "-", "/", "*"]
let randomOperation = operations[Math.floor(Math.random() * operations.length)]

// Write if-statements here

if (randomOperation === "+") console.log(`${num1} added by ${num2} equals ${num1 + num2}`)
else if (randomOperation === "-") console.log(`${num1} subtracted by ${num2} equals ${num1 - num2}`)
else if (randomOperation === "/") console.log(`${num1} divided by ${num2} equals ${num1 / num2}`)
else if (randomOperation === "*") console.log(`${num1} multiplied by ${num2} equals ${num1 * num2}`)
else console.log("you can only add, multiply, subtract, or divide")