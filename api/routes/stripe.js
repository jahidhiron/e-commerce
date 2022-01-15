// external imports
const router = require("express").Router();

// internal imports
const { verifyToken } = require("../middlewares/authGaurd");
const { addPayment } = require("../controllers/stripeController");

// CREATE
router.post("/payment", verifyToken, addPayment);

module.exports = router;
