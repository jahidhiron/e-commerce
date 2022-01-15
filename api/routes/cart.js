// external imports
const router = require("express").Router();

// internal imports
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middlewares/authGaurd");
const {
  addCart,
  updateCart,
  deleteCart,
  getCart,
  getCarts,
} = require("../controllers/CartController");

// CREATE
router.post("/", verifyToken, addCart);

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateCart);

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

// GET CARTS
router.get("/", verifyTokenAndAuthorization, getCarts);

// GET CART
router.get("/:id", verifyTokenAndAuthorization, getCart);

module.exports = router;
