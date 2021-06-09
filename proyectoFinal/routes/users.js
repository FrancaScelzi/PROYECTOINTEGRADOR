var express = require('express');
var router = express.Router();
let userController = require('../controllers/userController')
let multer = require('multer');
let path = require ('path')
/* GET users listing. */

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/profilePicture/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })


router.get('/edit/:id', userController.edit);
router.post('/edit', upload.single('userImage'), userController.update)
// router.get('/login', userController.login);
// router.get('/register', userController.register);
router.post('/logout', userController.destroy);
router.get('/:id', userController.profile);
module.exports = router;
