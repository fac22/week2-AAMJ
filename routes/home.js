const { getUsers } = require("../database/model.js");
const layout = require("../layout.js");

function get(request, response) {
  const html = /*html*/ `
  
  <form method="POST" class="stack-md center width-sm justify-space-between" id="posting-form">
            <!-- // Name -->
            <label for="username">User name</label>
            <input type="text" id="username" name="username" placeholder="Your name" required>
  
            <!-- email -->
            <label for="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="Enter your email" required>
  
            <!-- New Message -->
            <button id="submit-details" name="submit-details" aria-label="Submit your details">Send</button>
  
          </form>

          <form method="POST" class="stack-md center width-sm justify-space-between" id="posting-form">
          <!-- // Name -->
          <label for="book_name">Book name</label>
          <input type="text" id="book_name" name="book_name" placeholder="Book name" required>

          <!-- Author -->
          <label for="author">Author</label>
          <input type="text" id="author" name="author" placeholder="Book author" required>

          <!-- Description -->
          <label for="desc">Book description</label>
          <textarea
              id="desc"
              name="desc" maxlength="100" placeholder="Book description in 100 characters or less"
            required></textarea>


          <!-- Genre -->
          <label for="genre">Genre</label>
          <input type="text" id="genre" name="genre" placeholder="Book genre" required>


          <button id="submit-details" name="submit-details" aria-label="Submit your details">Send</button>

        </form>
     `;

  response.send(html);
}

module.exports = { get };
