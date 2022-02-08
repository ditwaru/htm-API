const { Schema, model } = require('mongoose');

const socialSchema = Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = model('Event', socialSchema);
