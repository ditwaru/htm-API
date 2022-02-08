const { Schema, model } = require('mongoose');

const aboutSchema = Schema({
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
  // image: {
  //   type: String,
  // },
});

module.exports = model('About', aboutSchema);
