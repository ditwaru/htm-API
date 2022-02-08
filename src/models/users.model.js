const users = require('./schemas/users.schema');
const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');

const createUser = async (username, password) => {
  try {
    return await users.create({ username, password });
  } catch (e) {
    return e;
  }
};

const checkUserCredentials = async (username, password) => {
  try {
    const user = await users.findOne({ username });
    if (!user) {
      return 'Username not found';
    }
    return await bcrypt.compare(password, user.password);
  } catch (e) {
    return e;
  }
};

module.exports = { createUser, checkUserCredentials };
