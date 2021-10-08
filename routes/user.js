const { getUsers } = require("../database/model.js");

function get(request, response) {
  getUsers().then((users) => {
    const userList = users.map((user) => {
      return /*html*/ `
      <html>
      <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BookCase</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=PT+Mono&family=Patrick+Hand&family=Righteous&display=swap"
        rel="stylesheet"
      />
      <style>
        body{ background-color: #f2e8cf;
          color: #f2e8cf;
          display: flex; 
          flex-direction: column; 
          justify-content: center;
          margin: auto;
          font-family:'PT Mono', monospace;
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          border: 1px solid #89B0AE;
          border-radius: 25px;
          box-shadow: 0 1px 1px black, 0 8px 20px white;
          background-color: #bc4749;
          max-width: 450px;
          margin: auto;
          margin-top: 1rem;
        }
        p {
          margin: 1.5rem;
        }
      </style>
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <body>
        <li>
        <p>${user.username}</p>
        <p>${user.email}</p>
      
        </li>
        </body>
        </html>
      `;
    });
    response.send(`<ul>${userList.join("")}</ul>`);
  });
}
module.exports = { get };
