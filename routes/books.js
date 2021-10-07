const { getBooks } = require("../database/model.js");

function get(request, response) {
  getBooks().then((books) => {
    const bookItems = books.map((book) => {
      return /*html*/ `
        <li>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <p>${book.genres}</p>
        <p>${book.description}</p>
        </li>
      `;
    });
    response.send(`<ul>${bookItems.join("")}</ul>`);
  });
}

module.exports = { get };
