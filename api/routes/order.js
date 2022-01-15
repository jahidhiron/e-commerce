// external imports
const router = require("express").Router();

// internal imports
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("../middlewares/authGaurd");
const {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrders,
  getAllOrders,
  getMonthlyIncome,
} = require("../controllers/orderController");

// CREATE
router.post("/", verifyToken, addOrder);

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

// GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

// GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, getAllOrders);

// GET ORDERS
router.get("/:userId", verifyTokenAndAuthorization, getOrders);

module.exports = router;
