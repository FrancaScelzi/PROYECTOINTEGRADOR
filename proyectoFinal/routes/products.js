var express = require('express');
var router = express.Router();
let productController = require('../controllers/productController')
const multer = require('multer')
const path = require('path')



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/products/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })



/* GET home page. */
router.get('/product-add', productController.create)
router.post('/product-add', upload.single('wineImage'), productController.store)
router.get('/product-edit/:id', productController.edit)
router.post('/product-edit', upload.single('wineImage'), productController.editForm)
router.get('/results', productController.search)
router.get('/detail/:id?', productController.show)
router.post('/delete/:id?', productController.destroy)
router.post('/comment', productController.createComment)

module.exports = router;
