const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controller/books');
const app = express();
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT

// Configure body-parser
app.use(bodyParser.json());

// Define a root index route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Use the books router for the '/books' endpoint
app.use('/books', booksRouter);

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// BOOKS 
const booksController = require('./controller/books')
app.use('/books', booksController)

// Start the server
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
