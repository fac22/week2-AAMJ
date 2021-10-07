const { getUsers } = require("../database/model.js");

function get(request, response) {
  getUsers().then((users) => {
    const userList = users.map((user) => {
      return /*html*/ `
        <li>
        <p>${user.username}</p>
        <p>${user.email}</p>
      
        </li>
      `;
    });
    response.send(`<ul>${userList.join("")}</ul>`);
  });
}
module.exports = { getUsers };
