const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedYear: {
    type: Number,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);
