const { Schema, model } = require('mongoose');

const eventsSchema = Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  slug: {
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

module.exports = model('Event', eventsSchema);
