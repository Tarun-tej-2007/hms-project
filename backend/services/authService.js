const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

const registerUser = async (username, password, role) => {
  const userExists = await User.findOne({ username });
  if (userExists) {
    throw new Error('User already exists');
  }

  const user = await User.create({
    username,
    password,
    role,
  });

  if (user) {
    const token = generateToken(user._id);
    return { user, token };
  } else {
    throw new Error('Invalid user data');
  }
};

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password)) && user.isActive) {
    const token = generateToken(user._id);
    return { user, token };
  } else {
    throw new Error('Invalid username or password');
  }
};

module.exports = {
  registerUser,
  loginUser,
};