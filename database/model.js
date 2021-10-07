const db = require("./connection.js");

function getUsers() {
  return db.query("SELECT * FROM users").then((result) => result.rows);
}

function getBooks() {
    return db.query("SELECT * FROM books").then((result) => result.rows);
  }

function createUser(user) {
  const insert_user = /sql/` 
    INSERT INTO users(username, email) VALUES($1, $2)`;
  
  const { username, email } = user;
  return db.query(insert_user, [username, email]);
}




module.exports = { getUsers, getBooks, createUser };