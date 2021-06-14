const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "please enter userId"],
        unique: true,
    },
    wishList: [
        {
            productId:{
                type: Schema.Types.ObjectId,
                ref: "Product",
            }
        },
    ],
},{timestamps: true});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;