// external imports
const CryptoJS = require("crypto-js");

// internal imports
const User = require("../models/User");

// UPDATE
const updateUser = async (req, res) => {
  console.log(req.user);
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "User has been deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET USER
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET USERS
const getUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find(req.params.id)
          .select("-password")
          .sort({ _id: -1 })
          .limit(5)
      : await User.find().select("-password");

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// GET USER STAT

const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const userStats = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(userStats);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUserStats,
};
