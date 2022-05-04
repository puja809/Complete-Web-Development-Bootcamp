// Built-in Modules
// including the fs module
const fs=require("fs");
// Reading the file content
let text=fs.readFileSync("Testing.txt","utf-8");
// console.log(text);

// Replacing File content
text=text.replace("Testing","Demo");
console.log(text);

// creating a new file
console.log("Create a new file");
fs.writeFileSync("NewDemo.txt",text);