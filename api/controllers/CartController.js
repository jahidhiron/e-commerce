// internal imports
const Cart = require("../models/Cart");

// CREATE
const addCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const cart = await newCart.save();

    res.status(201).json(cart);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// UPDATE
const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// DELETE
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Cart has been deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET CART
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET CARTS
const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find();

    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

module.exports = {
  addCart,
  updateCart,
  deleteCart,
  getCart,
  getCarts,
};
