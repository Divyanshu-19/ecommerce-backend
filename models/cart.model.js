const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "please enter userId"],
        unique: true,
    },
    cartObj: [
        {
            productId:{
                type: Schema.Types.productId,
                ref: "Product",
            }
        },
    ],
},{timestamps: true});

const CartItem = mongoose.model("CartItem", CartSchema);
module.exports = CartItem;