//15
const {model} = require("mongoose");
//16
const {OrderSchema} = require ("../schemas/OrderSchema");

//17
const OrderModel = new model ("Order",OrderSchema) //order is a collection name and take the schema in OrderSchme

module.exports={OrderModel};