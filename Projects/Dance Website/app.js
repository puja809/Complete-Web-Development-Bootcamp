const express=require("express");
const path=require("path");
const app=express();
const mongoose = require('mongoose');
const bodyparser=require("body-parser");

mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser: true});

const port=80;

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
  });

const Contact = mongoose.model('Contact', contactSchema);

// Express specific 
app.use('/Static',express.static('Static'));
app.use(express.urlencoded());

//Pug specific
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

// End points
// GET Request
app.get('/', function (req, res) {
    const param={}
    res.status(200).render('home.pug',param)
})
app.get('/contact', function (req, res) {
    const param={}
    res.status(200).render('contact.pug',param)
})
// Post request
app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
});
})
// Start the server
app.listen(port,()=>{
    console.log(`Application started on port number ${port}`);
})
