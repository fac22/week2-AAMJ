BEGIN;

DROP TABLE IF EXISTS users, books, users_books CASCADE;

 CREATE TABLE users (
  username TEXT PRIMARY KEY,
  email TEXT
);

CREATE TABLE books (
  title TEXT PRIMARY KEY,
  author TEXT,
  genres TEXT,
  description TEXT
);

CREATE TABLE users_books (
  user_username TEXT REFERENCES users(username),
  book_title TEXT REFERENCES books(title)
); 


INSERT INTO users (username, email) VALUES
  ('Anna', 'acunnanefake@gmail.com'),
  ('Jihye', 'jihye@example.com'),
  ('Michael', 'placeholder123@example.com'),
  ('Adriana', 'adriana@example.uk')
;

INSERT INTO books (title, author, genres, description) VALUES
  ('The Tiger Who Came to Tea', 'Judith Kerr', 'childrens', 'The classic picture book story of Sophie and her extraordinary teatime guest has been loved by millions of children since it was first published more than fifty years ago. Now an award-winning animation!'),
  ('Jane Eyre', 'Charlotte Bronte', 'romane novel', 'At the end we are steeped through and through with the genius, the vehemence, the indignation of Charlotte Brontë.'),
  ('The Recruit', 'Robert Muchamore', 'Spy fiction', 'Spy Kids the book'),
  ('The insight cure', 'John Sharp', 'psikologi','Change Your Story, Transform Your Life' ),
  ('Beautiful World, Where Are You', 'Sally Rooney', 'literary fiction', 'The *new* novel from the internationally bestselling author of Normal People.')
;

INSERT INTO users_books (user_username, book_title) VALUES
  ('Michael', 'The Recruit'),
  ('Anna', 'The Tiger Who Came to Tea'),
  ('Anna', 'Beautiful World, Where Are You')
;

COMMIT;