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
    adType: {
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

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;