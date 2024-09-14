//20
const {model} = require("mongoose");
//21
const {PositionSchema} = require ("../schemas/PositionSchema");

//22
const PositionModel = new model ("position",PositionSchema) //position is a collection name and take the schema in positionschema

module.exports={PositionModel};