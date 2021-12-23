const express = require('express');
const router =  express.Router();   
/* const Category = require('../../models/category');
const slugify = require('slugify'); */
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { addCategory, getCategories } = require('../controller/category');


const shortid = require('shortid');
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  });

  const upload = multer({ storage});

router.post('/category/create',requireSignin,adminMiddleware, upload.single('categoryImage'),addCategory );
router.get('/category/getcategory', getCategories );

module.exports = router;

/* router.post('/category/create', (req, res) =>{

    const categoryObj = {
        name : req.body.name,
        slug : slugify(req.body.name)
    }

    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId;
    }

    const cat = new Category(categoryObj);
    cat.save((error, category)=>{
        if(error) return res.status(400).json({error});
        if(category){
            return res.status(201).json({ category });
        }
    });

}); 
meya controller ekata damai.*/