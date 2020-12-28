const express = require("express");

const authController = require("../controllers/auth.controller");

const router = express.Router();


router.post('/get', authController.auth_index);
router.post('/create', authController.auth_create);
router.delete('/delete', authController.auth_delete);

module.exports = router;