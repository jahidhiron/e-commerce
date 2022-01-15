// external imports
const router = require("express").Router();

// internal imports
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middlewares/authGaurd");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getUserStats,
} = require("../controllers/userController");

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser);

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

// GET USER STAT
router.get("/stats", verifyTokenAndAdmin, getUserStats);

// GET USERS
router.get("", verifyTokenAndAdmin, getUsers);

// GET USER
router.get("/:id", verifyTokenAndAdmin, getUser);

module.exports = router;
