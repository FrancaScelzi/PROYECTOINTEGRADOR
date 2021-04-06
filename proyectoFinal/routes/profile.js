var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')

/* GET home page. */
router.get('/', userController.profile)
router.get('/edit', userController.edit)

module.exports = router;
