// external imports
const router = require("express").Router();

// internal imports
const { addUser, login } = require("../controllers/authController");

// REGISTER
router.post("/register", addUser);

// LOGIN
router.post("/login", login);

module.exports = router;
