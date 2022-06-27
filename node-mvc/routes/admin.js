const express = require('express')

const userController = require('../controller/users')

const router = express.Router();

router.get('/add-user', userController.addNewUser);

module.exports = router;