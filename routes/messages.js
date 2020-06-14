const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('../jwt');
const messageController = require('../controllers/messageController');

router.use(jwt.authenticateJWT);
router.get('/', messageController.index);
//router.get('/new', messageController.new);
router.post('/', messageController.create);
router.get('/:id', messageController.show);
router.delete('/:id', messageController.delete);

module.exports = router;
