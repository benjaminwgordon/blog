const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require('../jwt');
const validation = require('../validation');


router.get('/', jwt.authenticateJWT, userController.welcome)
router.post('/', validation.username, validation.password, userController.login);


module.exports = router;