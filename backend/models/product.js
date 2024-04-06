const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    prName: {
        type: String,
        required: true
    },
    mrp: {
        type: String,
        required: true
    },
    sp: {
        type: String,
        require: true,
    },
    discount: {
        type: String,
        require: true
    },
    specs: {
        type: String,
        require: true
    },
    ratings: {
        type: String,
        default: false
    },
    images: {
        type: String,
        default: false
    }, weight: {
        type: String,
        default: false
    },
    prodSales: {
        type: String,
        default: false
    },


})
const User = mongoose.model("Product", userSchema);

module.exports = Product