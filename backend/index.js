// 1
const express = require("express");
//5
require('dotenv').config(); // read data from the env file
const mongoose = require('mongoose');

const bodyParser = require ("body-parser")
const cors = require("cors");
//23
const {HoldingModel} = require("./model/HoldingModels");
const {PositionModel} = require("./model/PositionModel");

const { OrderModel} = require("./model/OrderModel");
//6
const PORT = process.env.PORT || 3002 //deployment chya velela aws yek port no aler karar jith he deployed honar apla hya line chya code ne read karnar  tith   jar hi value nasel port chi tar 3002 port use honar this line is important.
const url = process.env.MONGO_URL; //.env file madhun yenar url database cha url ghetla

// 2
const app = express(); //create new app


//27 te network error mule he use kele
app.use(cors());
app.use(bodyParser.json());

//dummy data insert on db 1 time setup
//24
//get is a route jithe data la send karnar
//post user kadun kahi input pahije tevha use karta

// app.get("/addholdings",async(req,res)=>{
//     let tempHoldings = [
//         {
//           name: "BHARTIARTL",
//           qty: 2,
//           avg: 538.05,
//           price: 541.15,
//           net: "+0.58%",
//           day: "+2.99%",
//         },
//         {
//           name: "HDFCBANK",
//           qty: 2,
//           avg: 1383.4,
//           price: 1522.35,
//           net: "+10.04%",
//           day: "+0.11%",
//         },
//         {
//           name: "HINDUNILVR",
//           qty: 1,
//           avg: 2335.85,
//           price: 2417.4,
//           net: "+3.49%",
//           day: "+0.21%",
//         },
//         {
//           name: "INFY",
//           qty: 1,
//           avg: 1350.5,
//           price: 1555.45,
//           net: "+15.18%",
//           day: "-1.60%",
//           isLoss: true,
//         },
//         {
//           name: "ITC",
//           qty: 5,
//           avg: 202.0,
//           price: 207.9,
//           net: "+2.92%",
//           day: "+0.80%",
//         },
//         {
//           name: "KPITTECH",
//           qty: 5,
//           avg: 250.3,
//           price: 266.45,
//           net: "+6.45%",
//           day: "+3.54%",
//         },
//         {
//           name: "M&M",
//           qty: 2,
//           avg: 809.9,
//           price: 779.8,
//           net: "-3.72%",
//           day: "-0.01%",
//           isLoss: true,
//         },
//         {
//           name: "RELIANCE",
//           qty: 1,
//           avg: 2193.7,
//           price: 2112.4,
//           net: "-3.71%",
//           day: "+1.44%",
//         },
//         {
//           name: "SBIN",
//           qty: 4,
//           avg: 324.35,
//           price: 430.2,
//           net: "+32.63%",
//           day: "-0.34%",
//           isLoss: true,
//         },
//         {
//           name: "SGBMAY29",
//           qty: 2,
//           avg: 4727.0,
//           price: 4719.0,
//           net: "-0.17%",
//           day: "+0.15%",
//         },
//         {
//           name: "TATAPOWER",
//           qty: 5,
//           avg: 104.2,
//           price: 124.15,
//           net: "+19.15%",
//           day: "-0.24%",
//           isLoss: true,
//         },
//         {
//           name: "TCS",
//           qty: 1,
//           avg: 3041.7,
//           price: 3194.8,
//           net: "+5.03%",
//           day: "-0.25%",
//           isLoss: true,
//         },
//         {
//           name: "WIPRO",
//           qty: 4,
//           avg: 489.3,
//           price: 577.75,
//           net: "+18.08%",
//           day: "+0.32%",
//         },
//       ]; //copy kelya dachboad chya data.js tun
    
//       tempHoldings.forEach((item) => {
//             let newHolding = new HoldingModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day, //holdingschema structure copy kela schema madhe jaun and itemmadhun name yenar item madhun qty yenar as 
//         });
//         newHolding.save();
//       }); //loop chalavat ahe 
//       res.send("Done:");
// }) //add 1 time dummy data add data in a zerodha database in holdings collection

//25 one time data insert 
// app.get("/addposition",(req,res)=>{
//     let tempPosition = [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
//       tempPosition.forEach((item)=>{
//         let newPosition = new PositionModel({
//             Product:item.product,
//             name:item.name,
//             qty:item.qty,
//             price:item.price,
//             net:item.net,
//             day:item.day,
//             isLoss:item.isLoss,
//         })
//         newPosition.save();
//       })
//       res.send("position data inserted successfully")
// })



//26 fetch data from the database database tun data ghyaycha ahe
app.get("/allHoldings",async(req,res)=>{
    let allHoldings = await HoldingModel.find({});//holding model madhe purn holding cha data ahe mhanun .find ne data serch and find honar mongodb command ahe te mondodb tun holding che collection fetch honar
    res.json(allHoldings);
});

app.get("/allPosition",async(req,res)=>{
    let allPosition = await PositionModel.find({});//holding model madhe purn holding cha data ahe mhanun .find ne data serch and find honar mongodb command ahe te mondodb tun holding che collection fetch honar
    res.json(allPosition);
}); //yane api endpoints yenar yanna use karun dashboard tun connect karun

//28
app.post("/newOrder",async (req,res)=>{
    let newOrder =  new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: res.body.price,
        mode:req.body.mode, //data send karat ahot server la and database madhe store karu orders la
    });

    newOrder.save();

    res.send("order saved");
})


// 3
app.listen(PORT, () => {
    console.log("app started");

    //7
    mongoose.connect(url);
    console.log("database connected");

}); //app la trigger karte start hote app
