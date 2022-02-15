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
  bannerImages: {
    type: [
      {
        height: Number,
        width: Number,
        url: String,
      },
    ],
  },
  // image: {
  //   type: String,
  // },
});

module.exports = model('About', aboutSchema);
