// Serving HTML files using Server
//Including the fs & http modules and reading an html file
const fs= require('fs');
const http= require('http');
let readContent=fs.readFileSync('Keyframes&Animations&Transitions.html');

// creating a server
const server=http.createServer((req,res)=>{
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(readContent)
});

// listening a server

server.listen(80,'127.0.0.1',()=>{
    console.log("server is listening at port 80")
})

// serach with the IP mentioned above to get your file on server