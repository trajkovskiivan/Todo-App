const mongoose = require("mongoose");


before((done) => {
  mongoose.connect('mongodb://localhost/todo-app', {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.connection.once('open', (result) => {
    console.log('Connection has been made  ' + result);
    done();
  }).on('error', (error) => {
    console.log('Connection error  ', error)
  });
});