const User = require("../models/user.model");


const auth_index = (req, res) => {
  const {email, password} = req.body;
  console.log(req.body);
  console.log(email, password);
  User.findOne({email: email, password: password}).then((record) => {
    res.send(record);
  });
};

const auth_create = (req, res) => {
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
};

const auth_delete = (req, res) => {
  console.log(req.params)
  const {email, password} = req.params;
  User.findOneAndDelete({email: email, password: password}).then(result => {
    console.log(result)
    res.send({message: `User ${result.firstName} has been deleted`, status: true});
  });
};

module.exports = {
  auth_index,
  auth_create,
  auth_delete
}