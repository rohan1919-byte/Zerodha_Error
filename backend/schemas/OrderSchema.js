//13
const {Schema} = require("mongoose");


//14
const OrderSchema = new Schema ({
    name: String,
    qty: Number,
    price: Number,
    mode:String, //buy or sale like 
});

module.exports = {OrderSchema};