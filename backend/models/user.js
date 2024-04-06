const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    buildApart: {
        type: String,
        required: true
    },
    addLine1: {
        type: String,
        require: true,
    },
    addLine2: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    type: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true
    },
    ctAdd: {
        type: Boolean,
        default: false
    }
});


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    cnfPassword: {
        type: String,
        require: false
    },
    gender: {
        type: String,
        require: false
    },
    age: {
        type: String,
        required: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    otp: String,
    addresses: [addressSchema],
    order: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Order"
        }
    ],
    referralCode: {
        type: String,
        require: true
    },
    refPoint: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User