const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=80;

// Express specific 
app.use('/Static',express.static('Static'));
app.use(express.urlencoded());

//Pug specific
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'));

// End points
// GET Request
app.get('/', function (req, res) {
    const con="Fill the form to get free gym membership!!";
    const param={'title':'My Gym','content':con}
    res.status(200).render('FirstPugTemplae.pug',param)
})
// POST Request to submit the form and store the data in a txt file
app.post('/', (req, res)=>{
    name = req.body.name;
    email = req.body.email;
    let str=`The name of the client is ${name} and the email-id is ${email}`
    fs.writeFileSync('ClientData.txt',str)
    const param={'message':'Form submitted successfully'}
    res.status(200).render('FirstPugTemplae.pug',param)

})


// Start the server
app.listen(port,()=>{
    console.log(`Application started on port number ${port}`);
})

