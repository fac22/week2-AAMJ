const express = require("express");
const books = require("./routes/books.js");
const addBook = require("./routes/addBook.js");
const user = require("./routes/user.js");

const server = express();

server.get("/", books.get);
server.get("/users/add", addBook.get);
server.post("/users/add", addBook.post);
server.get("/user", user.get);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
