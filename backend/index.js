require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(bodyParser.json());

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");


// app.get('/addPositions', (req, res) => {
//     const tempHoldings = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     tempHoldings.forEach(async (holding) => {
//         const newHolding = new PositionsModel({
//             product: holding.product,
//             name: holding.name,
//             qty: holding.qty,
//             avg: holding.avg,
//             price: holding.price,
//             net: holding.net,
//             day: holding.day,
//             isLoss: holding.isLoss,
//         });

//         await newHolding.save();
//     });

//     res.send("Positions added successfully");
// });


app.get("/allHoldings", async (req, res) => {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    mongoose.connect(MONGO_URL);
    console.log('Connected MongoDB Successfully');
});
