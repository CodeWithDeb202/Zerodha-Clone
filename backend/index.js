require("dotenv").config({ quiet: true });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/AuthRoutes");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      const isLocalOrigin = /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin || "");

      if (!origin || isLocalOrigin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");

// Auth routes create users, log users in, verify cookies, and log users out.
app.use("/", authRoutes);

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({
      mode: { $exists: false },
      avg: { $exists: true },
      net: { $exists: true },
      day: { $exists: true },
    });
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: "Error fetching holdings", error: err.message });
  }
});

app.delete("/holding/:id", async (req, res) => {
  try {
    const deletedHolding = await HoldingsModel.findByIdAndDelete(req.params.id);

    if (!deletedHolding) {
      return res.status(404).json({ message: "Holding not found" });
    }

    res.json({
      message: "Holding removed successfully",
      holding: deletedHolding,
    });
  } catch (err) {
    res.status(500).json({ message: "Error removing holding", error: err.message });
  }
});

app.get("/allPositions", async(req, res) => {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
});


app.post("/newOrder", async (req, res) => {
  try {
    const newOrderData = req.body;
    const orderMode = String(newOrderData.mode || "").toUpperCase();
    const orderQty = Number(newOrderData.qty);
    const orderPrice = Number(newOrderData.price);

    const newOrder = new OrdersModel({
        name: newOrderData.name,
        qty: orderQty,
        price: orderPrice,
        mode: orderMode,
    });
    await newOrder.save();

    if (orderMode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({ name: newOrderData.name });

      if (existingHolding) {
        const oldQty = Number(existingHolding.qty || 0);
        const oldAvg = Number(existingHolding.avg || 0);
        const nextQty = oldQty + orderQty;
        const nextAvg = nextQty > 0 ? ((oldQty * oldAvg) + (orderQty * orderPrice)) / nextQty : orderPrice;

        existingHolding.qty = nextQty;
        existingHolding.avg = nextAvg;
        existingHolding.price = orderPrice;
        existingHolding.net = "0.00%";
        existingHolding.day = "0.00%";
        await existingHolding.save();
      } else {
        await HoldingsModel.create({
          name: newOrderData.name,
          qty: orderQty,
          avg: orderPrice,
          price: orderPrice,
          net: "0.00%",
          day: "0.00%",
        });
      }
    }

    res.status(201).json({
        message: "Order added successfully",
        order: newOrder,
    });
  } catch (err) {
    res.status(500).json({ message: "Error saving order", error: err.message });
  }
});

app.get("/allOrders", async (req, res) =>{
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders", error: err.message });
  }
})

if (!MONGO_URL) {
  console.error("MONGO_URL is missing. Add it to backend/.env before starting the server.");
  process.exit(1);
}

console.log("Connecting to MongoDB...");

mongoose.connect(MONGO_URL, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000,
}).then(() => {
  console.log("Connected MongoDB Successfully");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log("MongoDB connection error:", err);
  process.exit(1);
});

app.get("/test", (req, res) => {
  res.json({ 
    message: "Test route is working!" 
  });
});