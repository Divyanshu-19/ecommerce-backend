const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = Schema({
    name: {
        type: String, 
        required: [true, "please enter a name"]
    },
    image: {
        type: String, 
        required: [true, "please enter a image"]
    },

    fastDelivery: {
        type: Boolean, 
        required: [true, ""]
    },

    inStock: {
        type: Boolean, 
        required: [true, ""]
    },
    price: {
        type: Number, 
        required: [true, ""]
    },
    discountedPrice: {
        type: Number, 
        required: [true, ""]
    },
    offer: [
        {
            type: String, 
            required: [true, "please enter a image"]
        }  
    ],
    description: [
        {
            type: String, 
            required: [true, "please enter a image"]
        }  
    ],
    rating: Number,
},{timestamps: true});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;