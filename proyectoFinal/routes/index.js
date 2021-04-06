var express = require('express');
var router = express.Router();
let homeController = require('../controllers/mainController')

/* GET home page. */
router.get('/', homeController.index)


module.exports = router;
