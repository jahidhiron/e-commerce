// external imports
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// internal imports
const authRoute = require("./routes/auth");

const app = express();

// configuration
dotenv.config();
app.use(express.json());

// connect database
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connection successfull !"))
  .catch((err) => console.log(`Error to connect DB: ${err}`));

// route
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Backend server is running on port ${process.env.PORT}`)
);