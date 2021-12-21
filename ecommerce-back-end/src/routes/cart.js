const express = require('express');
const router =  express.Router();   
/* const Category = require('../../models/category');
const slugify = require('slugify'); */
const { requireSignin, userMiddleware } = require('../common-middleware');
const { addItemToCart } = require('../controller/cart');



router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart );


module.exports = router;
