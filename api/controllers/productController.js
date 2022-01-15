// internal imports
const Product = require("../models/Product");

// CREATE
const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// UPDATE
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(201).json(updatedProduct);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// DELETE
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({
      message: "Product has been deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET PRODUCT
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET PRODUCTS
const getProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products = null;

    if (qNew) {
      products = await Product.find().sort({ createAt: -1 }).limit(5);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(201).json(products);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  getProduct,
  getProducts,
  deleteProduct,
};
