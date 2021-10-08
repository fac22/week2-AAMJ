const { addBook } = require("../database/model.js");

function get(request, response) {
  const html = /*html*/ `
  <html lang="en">
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
      body {
        background-color: #f2e8cf;
        color: #f2e8cf;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "PT Mono", monospace;
      }

      form {  
        display: flex;
        flex-direction: column;
        max-width: 50vw;
        margin: auto;
        margin-top: 2rem;
        background-color: #bc4749;
        border: 1px solid #89B0AE;
        border-radius: 25px;
        padding: 1rem;
        box-shadow: 0 1px 1px grey, 0 8px 20px white;
      }

      div  {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        margin-top: 1rem;
      }

      label {
        padding: .5em 1em .5em 0;
        flex: 1;
      }
      textarea {
        min-width:100px
      }
      input, textarea{
        flex: 2;
      }

      button {
        font-size: 1rem;
      }


    </style>
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </head>
  <body>
    <section>
      <form
        method="POST"
        class="stack-md center width-sm justify-space-between"
        id="posting-form"
      >
        <!-- // Name -->
        <div>
        <label for="username">User name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your name"
          required
        />
        </div>

        <!-- email -->
        <div>
        <label for="user_email">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          placeholder="Enter your email"
          required
        />
        </div>

        <!-- Send -->
        <div>
        <button
          id="submit-details"
          name="submit-details"
        >
          Send
        </button>
        </div>
      </form>
    </section>

    <section>
      <form
        method="POST"
        class="stack-md center width-sm justify-space-between"
        id="posting-form"
      >
        <!-- // Name -->
      <div>
        <label for="book_name">Book name</label>
        <input
          type="text"
          id="book_name"
          name="book_name"
          placeholder="Book name"
          required
        />
      </div>
        <!-- Author -->
      <div>
        <label for="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Book author"
          required
        />
      </div>

        <!-- Description -->
      <div>
        <label for="desc">Book description</label>
        <textarea
          id="desc"
          name="desc"
          maxlength="100"
          rows="3"
          placeholder="100 characters or less"
          required
        ></textarea>
        </div>
        <!-- Genre -->
        <div>
          <label for="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Book genre"
            required
          />
        </div>

        <div>
          <button
            id="submit-details"
            name="submit-details"
            
          >
          Send
        </button>
        </div>
      </form>
    </section>
  </body>
</html>

  `;

  response.send(html);
}
function post(request, response) {
  addBook(request.body).then(() => {
    response.redirect("/");
  });
}

module.exports = { get, post };
