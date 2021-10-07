const express = require('express');
const books = require('./routes/books.js');

const server = express();

server.get('/', books.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
