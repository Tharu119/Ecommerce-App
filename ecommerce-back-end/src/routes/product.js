const express = require('express');
const router =  express.Router();   
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controller/product');
const multer = require('multer');
/* const {  } = require('../controller/category'); */
/* const Product = require('../models/product');  meya control ekata damma.*/
const shortid = require('shortid');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
  
//ihata 11-21 code eka gatte multer-npm eken wei.
const upload = multer({ storage});
router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct);


/* router.post('/product/create',requireSignin,adminMiddleware, (req, res) =>{
    res.status(200).json({message: 'Hello'})
}); 
*/
/* router.get('/category/getcategory', getCategories ); */

module.exports = router;