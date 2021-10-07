const { getPosts } = require("../database/model.js");

const htmlImport = function (request, response) {
  // Form to add books and users

  const html = /*html*/ `
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BookCase</title>
    <style>
      body{
        display: flex;}
        body{ background-color: beige;}
    </style>
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  <body>
  <section>
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
  </section>
  </body>
  `;

  //   response.send(html);
};

module.exports = { htmlImport };
