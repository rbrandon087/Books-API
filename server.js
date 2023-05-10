const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controllers/books');
const app = express();
const port = 3000;

// Configure body-parser
app.use(bodyParser.json());

// Define a root index route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Use the books router for the '/books' endpoint
app.use('/books', booksRouter);

// Start the server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
