const mongoose = require("mongoose");
const mocha = require("mocha")
const User = require("../models/user");
const assert = require("assert");


const userName = 'John';
const anotherTodo = {title: 'This is the second todo', body: 'We are making sure that the update works'};

let user = new User({
  "firstName": "Dave",
  "lastName": "Moon",
  "email": "test2@test.com",
  "password": "test",
  "age": 40,
  "userId": "specialId",
  "todos": [{title: "First ToDo for Dave", body: "Make this App work..."}]
});


describe('First connection ever', (done) => {

  // it('Create a user with todos', (done) => {
  //   let user = new User({
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'test@test.com',
  //     password: 'test',
  //     age: 30,
  //     userId: 'specialId',
  //     todos: [{title: 'First ToDo', body: 'Make this App work...'}]
  //   });

  //   user.save().then((res) => {
  //     console.log(res);
  //     User.findOne({firstName: userName}).then((record) => {
  //       console.log(record);
  //       assert(record.todos.lenght === 1);
  //       done();
  //     });
  //     done();
  //   });
  // });

  // it('Finding a user', (done) => {
  //   User.findOne({firstName: userName}).then(record => {
  //     console.log(record.todos);
  //     assert(record.firstName === 'John')
  //     console.log('John found');
  //     done();
  //   })
  // })

  // it('Finding a user, and then adding a todo', (done) => {
  //   User.findOne({firstName: userName}).then(record => {
  //     console.log(record.todos);
  //     record.todos = [...record.todos, anotherTodo];
  //     record.save().then((res) => {
  //       User.findOne({firstName: userName}).then((record) => {
  //         console.log(record.todos);
  //         assert(record.todos.length > 3);
  //         done();
  //       });
  //     });
  //   });
  // });


  // it('Finding user', (done) => {
  //   User.findOne({email: 'test@test.com'}).then(record => {
  //     if (!record) {
  //       console.log('User does exist  ', record.firstName)
  //     }
  //     assert(record);
  //     done();
  //   }).catch(error => {
  //     console.log('User does not exist', error.generatedMessage);
  //     User.createUser()
  //     done();
  //   })
  // })


  // it('Checking user, if !user, create user', (done) => {
  //   User.findOne({email: 'test2@test.com'}).then(record => {
  //     if (!record) {
  //       console.log('User does not exist  ')
  //       console.log('Creating User');
  //       console.log(user)
  //       user.save().then(result => {
  //         assert(user.email === result.email)
  //         done()
  //       })
  //     }
  //   }).catch(error => {
  //     console.log('User does exist');
  //     done();
  //   })
  // })

  // done()

});