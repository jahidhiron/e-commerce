// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// env configuration
dotenv.config();

// internal imports
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// connect database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connection successfull !"))
  .catch((err) => console.log(`Error to connect DB: ${err}`));

// route
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Backend server is running on port ${process.env.PORT}`)
);
