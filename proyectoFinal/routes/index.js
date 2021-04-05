var express = require('express');
var router = express.Router();
let homeController = require('../controllers/mainController')
/* GET home page. */
router.get('/', homeController.index)
router.get('/product', homeController.show)
module.exports = router;
