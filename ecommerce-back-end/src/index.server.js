const express = require('express');
const env =require('dotenv');
const mongoose = require('mongoose');
const app = express();
const path = require('path');




//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');

env.config();
 


//mongodb connection
mongoose.connect(
    `MONGODB_URL= mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster01.eo5bx.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
).then(() => {
    console.log('Database connected');
});



/*
app.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Hello from server'
    });
});
app.post('/data',(req, res, next)=>{
    res.status(200).json({
        message: req.body
    });
});*/

app.use(express.json()); 
app.use('/public',express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);





app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});