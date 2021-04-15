var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')

/* GET home page. */
router.get('/:id?', productController.show)
router.get('/product-add', productController.edit)
router.get('/results', productController.search)


module.exports = router;
