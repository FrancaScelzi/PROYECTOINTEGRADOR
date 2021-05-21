var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')

/* GET home page. */
router.get('/product-add', productController.create)
router.post('/product-add', productController.store)
router.get('/results', productController.search)
router.get('/:id?', productController.show)


module.exports = router;
