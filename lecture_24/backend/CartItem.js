const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(

    {

        productId : mongoose.Schema.Types.ObjectId,
        quantity:{type:Number, default:1}
    }
);

module.exports = mongoose.model("CartItem", cartItemSchema);