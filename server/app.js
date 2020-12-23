const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan")

const User = require("./models/user");

const app = express();
const port = 8080;



const dbURI = 'mongodb://localhost/todo-app';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => {
    console.log(`Connected to the db...`);
    app.listen(port, () => {
      console.log(`Server is listening on localhost:${port}`)
    })
  })
  .catch((err) => console.log(err))





// for the body parser
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

//app.use(cors()); // allowes all methods
const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
  methods: "GET, PUT"
};
app.use(cors(corsOptions))


app.get('/another-todos', (req, res) => {
  // res.header("Access-Control-Allow-Origin", "GET");
  User.findOne({firstName: "John"}).then((record) => {
    res.json(record)
  })
});

app.get('/', (req, res) => {
  res.redirect('/todos');
})
app.get('/todos', (req, res) => {
  // res.header("Access-Control-Allow-Origin", "GET");
  User.findOne({firstName: "John"}).then((record) => {
    res.json(record)
  })
});
