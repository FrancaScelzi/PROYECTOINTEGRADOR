var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
/* GET users listing. */

router.get('/edit', userController.edit);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/logout', userController.logout);
router.get('/:id', userController.profile);
module.exports = router;
