const express = require('express');
const router = express.Router();
const products = require("../randomData");


//Model
const Product = require('../models/product.model');


function checkAuth(req, res, next){
    const query = req.query;
    // console.log(query);
    next();
}

// router.use("/", checkAuth);

router.route('/')
.get(async (req, res) => {
    try{
        const result = await Product.find({})
        res.json({success: true, products:result.length, data: result});
    }
    catch(err){
        console.log(err);
    }
})
.post(async (req, res) => {
    const {name, image, fastDelivery, inStock, price, discountedPrice, offer, description, rating} = req.body;
    try{
        const newProduct = new Product({name, image, fastDelivery, inStock, price, discountedPrice, offer, description, rating});
        const response = await newProduct.save();
        res.json({sucess: true, message: response});
    }
    catch(err){
        console.log(err);
    }
})


router.route(':/id')
.get((req, res) => {
    const {id} = req.params;
    const product = products.find(product => product.id===id);
    if(product){
        return res.json({success: true, product})
    }
    res.status(404).json({success: false, message: "No product exist with that id"});
})


module.exports = router;