const express = require('express');
const { signup, signin /* requireSignin */ } = require('../controller/auth');
// const { check } = require('express-validator');
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require('../validators/auth');
const router= express.Router();



router.post('/signup',validateSignupRequest,isRequestValidated,signup);
router.post('/signin',validateSigninRequest,isRequestValidated, signin);


/* router.post('/profile', requireSignin, (req, res)=>{
    res.status(200).json({user: 'profile'})
}); */

/* Ihatha signup eke athi requrieSignin eka ain karai eyata hethuwa common-middleware eka sadimai */



module.exports = router;