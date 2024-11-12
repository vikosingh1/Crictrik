// server/controllers/authController.js
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error creating account. Please try again." });
  }
};
