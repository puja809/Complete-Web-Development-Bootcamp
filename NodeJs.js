// console.log("Hello all");
// _'underscore' defines the last value assigned.
// created server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');//host the html page on server
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Keyframes Animations Transitions</title>
      <style>
          .container{
              display: flex;
              width: 200px;
              height: 200px;
              margin: auto;
              align-items: center;
              border: 2px solid black;
              background-color:blanchedalmond;
              margin-top: 100px;
              box-shadow: 4px 4px 3px burlywood;
              animation-name: shadow;
              animation-duration: 2s;
              animation-iteration-count: infinite;
              /* animation-name: moves; */
              animation-direction: alternate-reverse;
              /* animation-timing-function: ease-out; */
              /* animation-fill-mode: alternate; */
              transition-property: all;
              transition-duration: 3s;
              /* transition-delay: 2s; */
              transition-timing-function: ease-in-out;
              /* Transition short-hand property */
              /* transition: property duration timing-function delay */
              /* transition:all 3s ease-in-out 2s; */
  
          }
  
          .container:hover{
              background-color:peru;
              width: 250px;
              height: 250px;
              font-size: 25px;
              transform: rotate(360deg);
              /* transform: skew(123deg); */
              /* transform: scale(2); */
              /* transform:translate(x-axis,y-axis) */
              /* transform:translate(123px, 123px) */
          }
          /* @keyframes moves{
              0%{
                  top: 0px;
                  left: 0px; 
              }
              50%{
                  top: 50px;
                   left: 0px;
              }
              100%{
                  top: 100px;
                  left: 100px; *
              }
          } */
          @keyframes shadow{
              from{
                  box-shadow: 4px 4px 3px burlywood;
              }
              to{
                  box-shadow: 13px 13px 6px burlywood;
              }
          }
  
          .box{
              text-align: center;
              margin-left: 50px;
              text-shadow: 2px 2px palevioletred;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="box">
              First Animation
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
