const { Schema, model } = require('mongoose');

const homeSchema = Schema({
  id: String,
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  // banner: {
  //   type: String
  // }
  imageURL: {
    type: String,
  },
});

module.exports = model('Home', homeSchema);
