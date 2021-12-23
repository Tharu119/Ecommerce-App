const Cart = require('../models/cart');

exports.addItemToCart = (req, res) =>{

    Cart.findOne({ user: req.user._id})
    .exec((error, cart)=>{
        if(error) return res.status(400).json({ error});
        if(cart){

            // res.status(200).json({ message: cart });
            //cart eke ekama item eka add keruweoth error msg ekak watei.

            const product =  req.body.cartItems.product;
            const item = cart.cartItems.find(c=> c.product == product);
            let condition , update;
            
        
            if(item){

                condition = { "user": req.user._id, "cartItems.product":product };
                update = {
                    "$set":{
                        "cartItems.$": {
                            ...req.body.cartItems,
                            quantity:item.quantity + req.body.cartItems.quantity
                        }
                    }
                };

                // Cart.findOneAndUpdate({ "user": req.user._id, "cartItems.product":product },{
                //     "$set":{
                //         "cartItems.$": {
                //             ...req.body.cartItems,
                //             quantity:item.quantity + req.body.cartItems.quantity
                //         }
                //     }
                //     })//meya exec karanne nathuwa run nowe.
                //     .exec((error, _cart)=>{
                //         if(error) return res.status(400).json({ error});
                //         if(_cart){
                //             return res.status(201).json({ cart});
                //         }  
                //     })
                

            }else{

                condition = { user: req.user._id};
                update= {
                    "$push":{
                        "cartItems": req.body.cartItems
                    }
                }
            }
            Cart.findOneAndUpdate(condition,update)//meya exec karanne nathuwa run nowe.
                .exec((error, _cart)=>{
                    if(error) return res.status(400).json({ error});
                    if(_cart){
                        return res.status(201).json({ cart});
                    }  
                })
        }else{
            //mema item eka kalin add kara nomatinam aluten cart ekata add karai.
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems] //model eke tiyana name eka.
            });
        
            cart.save((error, cart)=>{
                if (error) return res.status(400).json({ error });
                if(cart){
                    return res.status(201).json({ cart});
                }
            });
        }
    });
    

};  