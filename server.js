const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send("hello Ji and Adriana 🥳");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
