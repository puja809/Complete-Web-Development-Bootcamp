const express=require("express");
const path=require("path");
const app=express();
const port=80;

// Serving static files with express
app.use('/Static',express.static('Static'));

// set the view engine as pug
app.set('view engine','pug')


// Set the view directory
app.set('views',path.join(__dirname,'views'));

// Content of pug template
app.get('/demo', function (req, res) {
    res.render('demo', { title: 'Hey', message: 'Hello there!' })
  })

// Routing web pages using express
app.get("/",(req,res)=>{
    res.send("This is my Home Page");
});

app.get("/about",(req,res)=>{
    res.send("This is my About Page");
});

app.get("/services",(req,res)=>{
    res.status(404).send("This Page is not found");
});

app.listen(port,()=>{
    console.log(`Application started on port number ${port}`);
})

