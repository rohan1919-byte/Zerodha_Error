
//8
const {Schema} = require("mongoose");

//9
const HoldingSchema = new Schema ({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingSchema};