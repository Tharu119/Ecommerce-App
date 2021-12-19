const express = require('express');
const { signup, signin } = require('../../controller/admin/auth');
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require('../../validators/auth');


const router= express.Router();



router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated ,signin);

/*
meya wadak na. meya gahuwe webtoken check kara ganimatai.
router.post('/profile', requireSignin, (req, res)=>{
    res.status(200).json({user: 'profile'})
});

*/




module.exports = router;