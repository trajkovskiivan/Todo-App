const express = require("express");

const userController = require("../controllers/user.controller")

const router = express.Router();




router.get('/:email', userController.user_index);
// for testing just to get the correct todo
router.get('/todo/:id', userController.user_fetch_todo);

router.post('/post/todo', userController.user_post_todo);
router.delete('/delete/todo/:email/:id', userController.user_delete_todo);



module.exports = router;