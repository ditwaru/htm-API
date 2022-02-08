const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, checkUserCredentials } = require('../models/users.model');

const authCreateUser = async (req, res) => {
  try {
    const { username } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    createUser(username, hashedPassword);
    res.status(400).json({ message: 'Success' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const authLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing username or password' });
  }
  try {
    const user = await checkUserCredentials(username, password);
    if (user === true) {
      return res
        .status(200)
        .json({
          message: 'Username and password matched',
          jwt: jwt.sign({ username }, process.env.SESSION_SECRET),
        });
    } else if (user === false || user === 'Username not found') {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    throw new Error('an unexpected error occurred');
  } catch (err) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const authLogout = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const authCallback = async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

module.exports = { authLogin, authLogout, authCallback, authCreateUser };
