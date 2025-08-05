const authService = require('../services/authService');
const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const { user, token } = await authService.registerUser(username, password, role);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  try {
    const { user, token } = await authService.loginUser(username, password);
    res.json({ user, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = {
  register,
  login,
};