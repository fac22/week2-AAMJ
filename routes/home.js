const { getUsers } = require("../database/model.js");
const layout = require("../layout.js");

function get(request, response) {
  const html = /*html*/ `
  
  <form method="POST" class="stack-md center width-sm justify-space-between" id="posting-form">
            <!-- // Author -->
            <label for="new-author">User name</label>
            <input type="text" id="new-author" name="newAuthor" placeholder="Your name" required>
  
            <!-- Title -->
            <label for="new-title">Title</label>
            <input type="text" id="new-title" name="newTitle" placeholder="Write a unique post title" required>
  
            <!-- New Message -->
            <label for="new-txt">Message</label>
            <textarea
              id="new-xt"
              name="newTxt" maxlength="100" placeholder="What's on your mind? max length 100 characters"
            required></textarea>
            <button id="new-send" name="new-send" aria-label="Send post">Send</button>
  
          </form>
     `;

  response.send(html);
}

module.exports = { get };
