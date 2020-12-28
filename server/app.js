const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const userRoutes = require("./routes/user.router");
const authRoutes = require("./routes/auth.router");

const User = require("./models/user.model");

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
  methods: "GET, POST, PUT, DELETE"
};
app.use(cors(corsOptions));





app.get('/', (req, res) => {
  res.redirect('/auth');
});

app.get('/all', (req, res) => {
  User.find().then(result => {
    res.send(result)
  });
});




// auth routes
app.use('/auth', authRoutes);
// user routes
app.use("/user", userRoutes);













// auth routes
/*
// authenticate user
app.post('/auth/get', (req, res) => {
  const {email, password} = req.body;
  console.log(req.body);
  console.log(email, password);
  User.findOne({email: email, password: password}).then((record) => {
    res.send(record);
  });
});
// create user
app.post('/auth/create', (req, res) => {
  // console.log(req.body);
  const {email} = req.body;
  // res.send(req.body)
  User.findOne({email: email}).then(record => {
    if (record) {
      let status = false;
      res.send(status);
    } else {
      let user = new User(req.body);
      user.save().then(record => {
        console.log(`User ${record.firstName} is saved`)
        res.send(record)
      });
    };
  });
});
// delete user
app.delete('/auth/delete/:email/:password', (req, res) => {
  console.log(req.params)
  const {email, password} = req.params;
  User.findOneAndDelete({email: email, password: password}).then(result => {
    console.log(result)
    res.send({message: `User ${result.firstName} has been deleted`, status: true});
  });
});
*/

// user routes
/*

// fetch user with todos
app.get('/user/:email', (req, res) => {
  console.log('You Reached the /user')
  User.findOne({email: req.params.email}).then(record => {
    res.send(record)
  })
});
// for testing just to get the correct todo
app.get('/user/todo/:id', (req, res) => {
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
// post todo
app.post('/user/post/todo', (req, res) => {
  const {email, title, body} = req.body
  let obj = {title, body}
  User.findOne({email: email}).then(record => {
    record.todos.push(obj);
    record.save().then(result => {
      res.send(result)
    });
  });
});
// delete todo
app.delete('/user/delete/todo/:email/:id', (req, res) => {
  console.log(req.params);
  User.findOne({email: req.params.email}).then(record => {
    const altered = record.todos.filter(todo => todo._id.toString() !== req.params.id);
    record.todos = altered;

    record.save().then(alteredRecord => {
      console.log(alteredRecord);
      res.json(alteredRecord)
    })
  })
})
*/
