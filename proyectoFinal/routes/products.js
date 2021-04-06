var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')

/* GET home page. */
router.get('/', productController.show)
router.get('/product-add', productController.edit)

module.exports = router;
