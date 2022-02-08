const { Schema, model } = require('mongoose');

const usersSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model('User', usersSchema);
