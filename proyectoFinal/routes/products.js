var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')

/* GET home page. */
router.get('/product-add', productController.create)
router.post('/product-add', productController.store)
router.get('/product-edit/:id', productController.edit)
router.post('/product-edit/:id', productController.editForm)
router.get('/results', productController.search)
router.get('/detail/:id?', productController.show)
router.post('/delete/:id?', productController.destroy)


module.exports = router;
