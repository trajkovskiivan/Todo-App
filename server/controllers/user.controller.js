const User = require("../models/user.model");

const user_index = (req, res) => {
  console.log('You Reached the /user')
  User.findOne({email: req.params.email}).then(record => {
    res.send(record)
  })
};

const user_post_todo = (req, res) => {
  const {email, title, body} = req.body
  let obj = {title, body}
  User.findOne({email: email}).then(record => {
    record.todos.push(obj);
    record.save().then(result => {
      res.send(result)
    });
  });
};

// for testing just to get the correct todo
const user_fetch_todo = (req, res) => {
  User.findOne({firstName: "John"}).then((record) => {
    const {todos} = record;
    console.log(typeof (req.params.id))
    console.log(" ")
    // todos.map(todo => console.log(typeof (todo._id.toString())))
    const realSlimShady = todos.filter(todo => todo._id.toString() === req.params.id)
    console.log(realSlimShady)
    res.json(realSlimShady);
  })
};

const user_delete_todo = (req, res) => {
  console.log(req.params);
  User.findOne({email: req.params.email}).then(record => {
    const altered = record.todos.filter(todo => todo._id.toString() !== req.params.id);
    record.todos = altered;

    record.save().then(alteredRecord => {
      console.log(alteredRecord);
      res.json(alteredRecord)
    })
  })
};

module.exports = {
  user_index,
  user_fetch_todo,
  user_post_todo,
  user_delete_todo
};