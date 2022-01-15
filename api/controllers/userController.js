// external imports
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// internal imports
const User = require("../models/User");

// REGISTER
const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });

  try {
    if (username && email && password) {
      const user = await newUser.save();

      const { password, ...info } = user._doc;
      res.status(201).json(info);
    } else {
      res.status(400).json({
        message: `Set username, email & password to register`,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({
        message: `Wrong Credential!`,
      });
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const decPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (req.body.password !== decPassword) {
      return res.status(401).json({
        message: `Wrong Credential!`,
      });
    }

    const { password, ...info } = user._doc;

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(201).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json({
      message: `Internal server error: ${err}`,
    });
  }
};

module.exports = {
  addUser,
  login,
};
