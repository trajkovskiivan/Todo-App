const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan")

const User = require("./models/user");

const app = express();
const port = 8080;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


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
  methods: "GET, PUT, DELETE"
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

app.get('/todos/:id', (req, res) => {
  // res.header("Access-Control-Allow-Origin", "GET");
  User.findOne({firstName: "John"}).then((record) => {
    const {todos} = record;
    console.log(typeof (req.params.id))
    console.log(" ")
    // todos.map(todo => console.log(typeof (todo._id.toString())))
    const realSlimShady = todos.filter(todo => todo._id.toString() === req.params.id)
    console.log(realSlimShady)
    res.json(realSlimShady);
  })
});

app.post('/todo', (req, res) => {
  User.findOne({firstName: "John"}).then(record => {
    console.log(record.todos);
    record.todos.push(req.body)
    record.save().then((result) => {
      res.send(result)
    });

  })
  // console.log(req.body)
  // res.json(req.body)
})



app.delete('/todos/:id', (req, res) => {
  console.log(req.params);
  User.findOne({firstName: "John"}).then(record => {
    const altered = record.todos.filter(todo => todo._id.toString() !== req.params.id);
    record.todos = altered;

    record.save().then(alteredRecord => {
      console.log(alteredRecord);
      res.json(alteredRecord)
    })
  })
})


