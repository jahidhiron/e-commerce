// internal imports
const Order = require("../models/Order");

// CREATE
const addOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const order = await newOrder.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// UPDATE
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// DELETE
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Order has been deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET ORDERS
const getOrders = async (req, res) => {
  try {
    const orders = await Order.findOne({ userId: req.params.orderId });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET ALL ORDERS
const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find();

    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

const getMonthlyIncome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

module.exports = {
  addOrder,
  updateOrder,
  deleteOrder,
  getOrders,
  getAllOrders,
  getMonthlyIncome,
};
