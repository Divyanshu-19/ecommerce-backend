const express = require('express');
const router = express.Router();
const products = require("../randomData");

function checkAuth(req, res, next){
    const query = req.query;
    console.log(query);
    next();
}

router.use("/", checkAuth);

router.route('/')
.get((req, res) => {
    res.json(products);
});


router.route(':/id')
.get((req, res) => {
    const {id} = req.params;
    const product = products.find(product => product.id===id);
    if(product){
        return res.json({success: true, product})
    }
    res.status(404).json({success: false, message: "No product exist with that id"});
});

module.exports = router;