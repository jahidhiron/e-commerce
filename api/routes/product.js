const router = require("express").Router();

// external imports
const { verifyTokenAndAdmin } = require("../middlewares/authGaurd");
const {
  addProduct,
  updateProduct,
  getProduct,
  getProducts,
  deleteProduct,
} = require("../controllers/productController");

// CREATE
router.post("/", verifyTokenAndAdmin, addProduct);

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

// UPDATE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

// GET PRODUCT
router.get("/:id", getProduct);

// GET PRODUCTs
router.get("/", getProducts);

module.exports = router;
