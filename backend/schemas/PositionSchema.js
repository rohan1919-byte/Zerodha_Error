//18
const { Schema} = require ("mongoose");
//19
const PositionSchema = new Schema ({
    Product:String,
    name:String,
    qty:Number,
    price:Number,
    net:String,
    day:String,
    isLoss:Boolean, //value true and false madhe
});

module.exports = {PositionSchema};