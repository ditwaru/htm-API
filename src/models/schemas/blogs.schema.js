const { Schema, model } = require('mongoose');

const blogSchema = Schema({
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
  published: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
});

module.exports = model('Blog', blogSchema);
