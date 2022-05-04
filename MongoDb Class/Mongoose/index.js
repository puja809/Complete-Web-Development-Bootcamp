// including mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Employee', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log("We are connected bro/sis")
});

// Creating a schema
const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function speak() {
    const greeting = "Meow name is " + this.name
    console.log(greeting);
  };

// Creating a model for the schema
const Kitten = mongoose.model('Kitten', kittySchema);

// Describing collections for our model
const silence = new Kitten({ name: 'Pooo' });
console.log(silence.name);
silence.speak();

silence.save(function(err,silence){
    if(err) return console.error(err);
    silence.speak();
});