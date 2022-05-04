// Synchronous or blocking: Line by line execution of code for example .readFileSync("<File_name>");
// Asynchronous or non-blocking: Call back is fired. for eaxmaple in readFile("") first the entire code will execute and at the end the results will be published.

// Synchronous
const file=require("fs");
// let text=file.readFileSync("NewDemo.txt","utf-8");
// console.log(text);

// Asynchronous
let text1=file.readFile("NewDemo.txt","utf-8",(err,data)=>{
    console.log(err,data)//err->hold error if any, data->will print the content of the file
});
console.log("This is asynchronous block");
