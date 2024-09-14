//10
const {model} = require("mongoose");

//11
const {HoldingSchema} = require("../schemas/HoldingSchema") //require holdingschema to create a model

//12
const HoldingModel = new model ("holding",HoldingSchema) //holding is a collection name and take the schema in holdingschema

module.exports={HoldingModel};